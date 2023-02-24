import axios from 'axios';
import { BASE_URL } from 'utils/constants';
import { responseInterceptor, errorInterceptor } from './interceptors';

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { API };
