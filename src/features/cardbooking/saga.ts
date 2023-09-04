import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './CardBookingSlice';
// import { StoryType } from './type';

const { request, success, error, requestCardBooking, successCardBooking, errorCardBooking } = actions;

// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* sotryListSagaWatcher() {
    yield takeLatest(request, getSlotsListSagaWorker);
    yield takeLatest(requestCardBooking, postBookListSagaWorker);
}

export function availableSlotList(startDate, endDate) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.CARD_BOOKING(startDate, endDate),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* getSlotsListSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse = yield call(availableSlotList, payload.startDate, payload.endDate);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}

export function* postBookListSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse<unknown> = yield call(bookSlots, payload);
        yield put(successCardBooking(response.data));
    } catch (_error) {
        yield put(errorCardBooking(_error));
    }
}

export function bookSlots(data: unknown) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const config: AxiosRequestConfig = {
        url: END_POINTS.BOOK_SLOTS,
        method: 'POST',
        data,
    };

    return Network.networkCall(config);
}
