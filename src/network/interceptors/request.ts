import { InternalAxiosRequestConfig } from 'axios';

export default async function defaultRequest(config: InternalAxiosRequestConfig) {
    const { baseURL = '', url = '' } = config;
    console.log('===============API REQUEST=====================');
    console.log(baseURL + url, config);
    console.log('====================================');
    return config;
}
