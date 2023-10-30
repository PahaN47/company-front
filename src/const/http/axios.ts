import Axios from 'axios';

import { BACKEND_HOST } from './urls';

const defaultConfig = {
    baseURL: BACKEND_HOST,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const axiosInstance = Axios.create(defaultConfig);
