import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './AddPaymentSlice';
// import { StoryType } from './type';

const { request, success, error } = actions;

// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* sotryListSagaWatcher() {
    yield takeLatest(request, getSettlePaymentSagaWorker);
}

export function getSettlePayment(userId) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.GET_SETTLEUP_LIST(userId),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* getSettlePaymentSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse = yield call(getSettlePayment, payload.userId);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
