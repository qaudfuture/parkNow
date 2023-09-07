import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './LoginSlice';
import { SecureStorageKey, SecureUtils } from '../../utils/secureStorage';
import { setGlobalBaseUrl, setGlobalHeader } from '../../network/axios';
import { NETWORK_CONST } from '../../network/contants';
import { SetLoginAuthProps } from '../../hooks/useAuth';
import AsyncStorage from '@react-native-community/async-storage';

type ResponseData = {
    token: string;
};

const { request, success, error, clear, clearState } = actions;

export default function* loginSagaWatcher() {
    yield takeLatest(request, loginRequestSagaWorker);
    yield takeLatest(clear, LoginClearWorker);
}

export function userLogin(data: SetLoginAuthProps) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.LOGIN,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}

// Store user data and access token
const storeUserData = async (userData, accessToken) => {
    try {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        await AsyncStorage.setItem('accessToken', accessToken);
    } catch (error) {
        console.error('Error storing user data:', error);
    }
};

export function* loginRequestSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(userLogin, payload);
        const { data, status } = response;
        console.log('Loginresponse', data, status);
        if (status === 200) {
            const { token = '', user = {} } = data as ResponseData;
            if (token) {
                setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
                setGlobalHeader(token);
                storeUserData(user, token);
                SecureUtils.set(SecureStorageKey.ACCESS_TOKEN, token);
                SecureUtils.set(SecureStorageKey.USER_DATA, JSON.stringify(user));
            }
        }
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function* LoginClearWorker() {
    try {
        SecureUtils.clearStorage();
        SecureUtils.removeItemFromStorage();
        setGlobalBaseUrl(NETWORK_CONST.AUTH_BASE_URL);
    } finally {
        yield put(clearState());
    }
}
