/* eslint-disable max-len */

import {
  IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor, isLoggedIn, setAuthTokens, clearAuthTokens, getAccessToken, getRefreshToken,
} from 'axios-jwt';
import axios from 'axios';
import { API_URL } from '@app/config';

// 1. Create an axios instance that you wish to apply the interceptor to
export const axiosInstance = axios.create({ baseURL: API_URL });

// 2. Define token refresh function.
const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<IAuthTokens | string> => {
  const response = await axios.post(`${API_URL}/auth/refresh`, { token: refreshToken });

  // If your backend supports rotating refresh tokens, you may also choose to return an object containing both tokens:
  // return {
  //  accessToken: response.data.access_token,
  //  refreshToken: response.data.refresh_token
  // }

  return response.data.access_token;
};

// 3. Add interceptor to your axios instance
applyAuthTokenInterceptor(axiosInstance, { requestRefresh });
