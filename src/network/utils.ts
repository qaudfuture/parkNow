// import { AxiosRequestConfig } from 'axios';
// import { END_POINTS } from './endpoint';
// import { setGlobalHeader } from './axios';

// export const tokenRefresh = async () => {
//     const refreshToken = SecureUtils.get(SecureStorageKey.REFRESH_TOKEN);

//     if (!refreshToken) {
//         store.dispatch(LoginAction.clear());
//     }
//     const config: AxiosRequestConfig = {
//         url: END_POINTS.TOKEN_REFRESH,
//         method: 'POST',
//         data: { refresh_token: refreshToken },
//     };

//     const response = await Network.networkCall(config);
//     const { refresh_token = '', access_token = '' } = response.data;

//     setGlobalHeader(access_token);
//     SecureUtils.set(SecureStorageKey.ACCESS_TOKEN, access_token);
//     SecureUtils.set(SecureStorageKey.REFRESH_TOKEN, refresh_token);
//     return access_token as string;
// };
