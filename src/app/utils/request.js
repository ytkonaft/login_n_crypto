import axios from 'axios';
import { URL_API } from 'app/config';

const request = () => {
  const defaultOptions = {
    baseURL: `${URL_API}/`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (!token || config.notAuthorizeHeader) {
      return config;
    }
    const authConfig = config;
    authConfig.headers.Authorization = `Bearer ${token}`;
    return authConfig;
  });

  return instance;
};

export default request();
