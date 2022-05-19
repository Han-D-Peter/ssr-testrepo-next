import Axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';

const axios = Axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setAuthToken(authToken: string): void {
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

export function clearAuthToken(): void {
  axios.defaults.headers.common['Authorization'] = '';
}

const client = {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, config);

    return response.data;
  },

  async post(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.post(url, body, config);

    return response.data;
  },

  async put(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, config);

    return response.data;
  },

  async patch(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.patch(url, body, config);

    return response.data;
  },

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await axios.delete(url, config);

    return response.data;
  },
};

export default client;
