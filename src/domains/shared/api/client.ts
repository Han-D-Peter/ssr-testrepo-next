import Axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';

const axios = Axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originalRequest = config;
      const refreshToken = localStorage.getItem('refreshToken');
      // refresh토큰 만료 상황로직 작성예정
      try {
        const { data } = await client.post('/refresh-token', { refreshToken });
        const { token } = data;
        setAuthToken(token);
        return axios(originalRequest);
      } catch (e) {
        clearAuthToken();
        localStorage.removeItem('refreshToken');
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);

export function setAuthToken(authToken: string): void {
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  window.sessionStorage.setItem('userInfo', authToken);
}

export function clearAuthToken(): void {
  axios.defaults.headers.common['Authorization'] = '';
  window.sessionStorage.removeItem('userInfo');
}

const client = {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, config);

    return response.data;
  },

  async post(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.post(url, body, config);

    return response.data;
  },

  async put(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, config);

    return response.data;
  },

  async patch(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.patch(url, body, config);

    return response.data;
  },

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await axios.delete(url, config);

    return response.data;
  },
};

export default client;
