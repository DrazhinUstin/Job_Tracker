import axios from 'axios';
import { getStorageItem } from './storage';

const axiosInstance = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

axiosInstance.interceptors.request.use((config) => {
    const token = getStorageItem('user')?.token;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
