import { clearAuthTokens, setAuthTokens, isLoggedIn } from 'axios-jwt';
import * as React from 'react';
import { toast } from 'react-toastify';
import { axiosInstance } from '@app/api/api';

type LoginRequestParams = {
  email: string;
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
  // const [state, dispatch] = React.useReducer(authReducer, {auth: 0})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn());

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
        toast('Something went wrong', { type: 'error' });
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
      toast('Something went wrong', { type: 'error' });
    }
  };

  // 5. Clear the auth tokens from localstorage
  const logout = async () => {
    try {
      await axiosInstance.post('/auth/logout');

      clearAuthTokens();
      setIsAuthenticated(false);
    } catch (e) {
      if (e.status !== 500) {
        toast('Wrong email or password', { type: 'error' });
      } else {
        toast('Something went wrong', { type: 'error' });
      }
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
