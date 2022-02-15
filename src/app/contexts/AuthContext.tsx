import {
  clearAuthTokens, setAuthTokens, isLoggedIn, TokenRefreshRequest, IAuthTokens, applyAuthTokenInterceptor,
} from 'axios-jwt';
import * as React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { axiosInstance } from '@app/api/api';
import { API_URL } from '@app/config';

type LoginRequestParams = {
  username: string;
  password:string;
}

type RegisterRequestParams = {
  email: string;
  password:string;
  'firstName': string,
  'lastName': string,
}

type ContextType = {
  isAuthenticated: boolean;
  login: (params: LoginRequestParams) => Promise<void>;
  register: (params: RegisterRequestParams) => Promise<void>;
  logout: () => Promise<void>
};

const AuthContext = React.createContext<ContextType|undefined>(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn());

  const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<IAuthTokens | string> => {
    const response = await axios.post(`${API_URL}/auth/refresh`, { token: refreshToken });
    setIsAuthenticated(true);
    return response.data.access_token;
  };

  React.useEffect(() => {
    applyAuthTokenInterceptor(axiosInstance, { requestRefresh });
  }, []);

  // 4. Post email and password and get tokens in return. Call setAuthTokens with the result.
  const login = async (params: LoginRequestParams) => {
    try {
      const response = await axiosInstance.post('/auth/login', params);
      setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
      setIsAuthenticated(true);
    } catch (e) {
      if (e.status !== 500) {
        toast('Wrong email or password', { type: 'error' });
      } else {
        toast(e.response?.data?.message || 'Something went wrong', { type: 'error' });
      }
    }
  };

  const register = async (params: RegisterRequestParams) => {
    try {
      const response = await axiosInstance.post('/auth/register', params);
      setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
      setIsAuthenticated(true);
    } catch (e) {
      toast(e.response?.data?.message || 'Something went wrong', { type: 'error' });
    }
  };

  // 5. Clear the auth tokens from localstorage
  const logout = async () => {
    try {
      setIsAuthenticated(false);
      await axiosInstance.post('/auth/logout');
      clearAuthTokens();
    } catch (e) {
      console.error(e.response?.data?.message);
    }
  };

  const value = {
    isAuthenticated, login, logout, register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
