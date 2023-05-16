import Axios from 'axios';

const defaultConfig = {
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const axiosInstance = Axios.create(defaultConfig);
