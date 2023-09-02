import axios from 'axios';

import * as Interceptors from './interceptors';
import { NETWORK_CONST } from './contants';
// import { API_BASE_URL } from '@env';

const BASE_URL = 'https://parkingmanagement20230821181410.azurewebsites.net/';

export const BaseAxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: NETWORK_CONST.AXIOS_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Cache-Control': 'no-cache',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY21AYWJjLmNvbSIsImV4cCI6MTY5MzY4MTcyNywiaXNzIjoicGFya05vdyIsImF1ZCI6InBzcmtub3d1c2VycyJ9.cfbJbDwAOKnfXMglbhboWWsRBeXiOKD45-TYc-5nU7g',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY21AYWJjLmNvbSIsImV4cCI6MTY5MzY4MTcyNywiaXNzIjoicGFya05vdyIsImF1ZCI6InBzcmtub3d1c2VycyJ9.cfbJbDwAOKnfXMglbhboWWsRBeXiOKD45-TYc-5nU7g',
    },
});

BaseAxiosInstance.interceptors.request.use(Interceptors.onRequestInterceptor, Interceptors.onRequestInterceptorError);

BaseAxiosInstance.interceptors.response.use(
    Interceptors.onResponseInterceptor,
    Interceptors.onResponseInterceptorError,
);

export const setGlobalHeader = (token: string) => {
    console.log('BearertokenTOKEN', `Bearer ${token}`);
    BaseAxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    BaseAxiosInstance.defaults.headers.common['token'] = token;
};

export const setGlobalBaseUrl = (url: string) => {
    BaseAxiosInstance.defaults.baseURL = url;
};
