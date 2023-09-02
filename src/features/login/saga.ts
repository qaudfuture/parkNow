import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './LoginSlice';
import { SecureStorageKey, SecureUtils } from '../../utils/secureStorage';
import { setGlobalBaseUrl } from '../../network/axios';
import { NETWORK_CONST } from '../../network/contants';
import { SetLoginAuthProps } from '../../hooks/useAuth';

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

export function* loginRequestSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(userLogin, payload);
        const { data, status } = response;

        console.log('Loginresponse', data, status);

        if (status === 200) {
            const { token = '' } = data as ResponseData;

            console.log('access_token', token);
            if (token) {
                setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
                // setGlobalHeader(token);
                SecureUtils.set(SecureStorageKey.ACCESS_TOKEN, token);
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
        setGlobalBaseUrl(NETWORK_CONST.AUTH_BASE_URL);
    } finally {
        yield put(clearState());
    }
}
