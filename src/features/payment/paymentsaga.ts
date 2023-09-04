import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './PaymentSlice';
// import { StoryType } from './type';

const { request, success, error, requestaddPayment, successaddPayment, erroraddPayment, requestgetettleAmount } =
    actions;

// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* sotryListSagaWatcher() {
    yield takeLatest(request, getTransactionListSagaWorker);
    yield takeLatest(requestaddPayment, addPaymentSagaWorker);
    yield takeLatest(requestgetettleAmount, getSettlePaymentSagaWorker);
}

export function getAllTransactions(userId) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.GET_TRANSACTIONS(userId),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* getTransactionListSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse = yield call(getAllTransactions, payload.userId);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function* addPaymentSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(addPayment, payload);
        yield put(successaddPayment(response.data));
    } catch (_error) {
        yield put(erroraddPayment(_error));
    }
}

export function addPayment(data: unknown) {
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
