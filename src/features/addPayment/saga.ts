import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './AddPaymentSlice';
import { AddPaymentPayload } from './type';

const { request, success, error } = actions;

type ResponseTyp = {
    results: AddPaymentPayload;
};
export default function* sotryListSagaWatcher() {
    yield takeLatest(request, addPaymentSagaWorker);
}

export function* addPaymentSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<ResponseTyp> = yield call(addPayment, payload);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function addPayment(data: AddPaymentPayload) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const config: AxiosRequestConfig = {
        url: END_POINTS.ADD_PAYMENT,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}
