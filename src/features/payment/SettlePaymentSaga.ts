import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './SettlePaymentSlice';
// import { StoryType } from './type';

const { request, success, error } = actions;

// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* sotryListSagaWatcher() {
    yield takeLatest(request, settlePaymentSagaWorker);
}

export function* settlePaymentSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(settlePayment, payload);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function settlePayment(data: unknown) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const config: AxiosRequestConfig = {
        url: END_POINTS.SETTLE_PAYMENT,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}
