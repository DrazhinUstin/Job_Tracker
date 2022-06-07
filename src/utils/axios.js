import axios from 'axios';
import { getStorageItem } from './storage';
import { clearStore } from '../store';

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

const handleAxiosError = (error, thunkAPI) => {
    if (error.response.status === 401) {
        clearStore();
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
};

export { axiosInstance as default, handleAxiosError };
