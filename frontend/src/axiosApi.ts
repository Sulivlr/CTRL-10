import axios from 'axios';
import {apiURL} from './constans.ts';

const axiosApi = axios.create({
  baseURL: apiURL,
});

export default axiosApi;