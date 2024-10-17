import axios from 'axios';
import { apiURL } from '../constants';

export const axiosApiClient = axios.create({ baseURL: apiURL });
