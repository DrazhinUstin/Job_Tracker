import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default axiosInstance;
