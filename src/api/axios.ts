import axios from "axios";
import { tokenStorage } from "../utils/token";

const API_BASE_URL = "https://eco-zone-server.com/api";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenStorage.getRefreshToken();
      if (!refreshToken) {
        tokenStorage.clearTokens();
        window.location.href = "/";
        return Promise.reject(new Error("No refresh token"));
      }

      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          null,
          {
            headers: { RefreshToken: refreshToken },
          }
        );

        const {
          accessToken,
          refreshToken: newRefreshToken,
          tokenType,
          expiresInSeconds,
        } = response.data;

        tokenStorage.setTokens(accessToken, newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        tokenStorage.clearTokens();
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
