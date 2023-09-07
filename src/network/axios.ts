import axios from 'axios';

import * as Interceptors from './interceptors';
import { NETWORK_CONST } from './contants';
import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';
// import { API_BASE_URL } from '@env';

const BASE_URL = 'https://parkingmanagement20230821181410.azurewebsites.net/';

export const BaseAxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: NETWORK_CONST.AXIOS_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Cache-Control': 'no-cache',
        // Authorization:
        //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY21AYWJjLmNvbSIsImV4cCI6MTY5Mzc3MzI5NiwiaXNzIjoicGFya05vdyIsImF1ZCI6InBzcmtub3d1c2VycyJ9.hbYh122_W65ELc_0cafBMDuRHnPYakw4kNFKUj0dysI',
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY21AYWJjLmNvbSIsImV4cCI6MTY5Mzc3MzI5NiwiaXNzIjoicGFya05vdyIsImF1ZCI6InBzcmtub3d1c2VycyJ9.hbYh122_W65ELc_0cafBMDuRHnPYakw4kNFKUj0dysI',
    },
});

BaseAxiosInstance.interceptors.request.use(Interceptors.onRequestInterceptor, Interceptors.onRequestInterceptorError);

BaseAxiosInstance.interceptors.response.use(
    Interceptors.onResponseInterceptor,
    Interceptors.onResponseInterceptorError,
);

export const getAccessToken = async () => {
    const token = (await SecureUtils.get(SecureStorageKey.ACCESS_TOKEN)) || '';
    return token;
};

export const setGlobalHeader = async (token: string) => {
    BaseAxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    BaseAxiosInstance.defaults.headers.common['token'] = token;
};

export const setGlobalBaseUrl = (url: string) => {
    BaseAxiosInstance.defaults.baseURL = url;
};
