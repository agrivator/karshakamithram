import axios, { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN } from 'context/AuthContext/AuthProvider';
import { RequestReturn } from './api.interface';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

/**
 * An axios interceptor to add auth token
 */
axios.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            // eslint-disable-next-line dot-notation
            req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

/**
 * Request function to make all kinds of request
 */
const request = async <T extends unknown>(
    options: AxiosRequestConfig,
    type = 'json'
): Promise<RequestReturn<T>> => {
    const headers = {
        'Content-Type': `application/${type}`,
    };
    Object.assign(options, { headers });
    try {
        const { data }: { data: T } = await axios(options);
        return { error: null, data };
    } catch (error) {
        return { error: error.response.data, data: null };
    }
};

export default request;
