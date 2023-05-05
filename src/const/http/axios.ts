import Axios from 'axios';

const defaultConfig = {
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const axiosInstance = Axios.create(defaultConfig);
