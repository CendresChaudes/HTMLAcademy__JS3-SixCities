import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from '../token/getToken';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    }
  );

  return api;
};
