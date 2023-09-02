import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './CardBookingSlice';
// import { StoryType } from './type';

const { request, success, error } = actions;

// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* sotryListSagaWatcher() {
    yield takeLatest(request, sotryListSagaWorker);
}

export function availableSlotList(startDate, endDate) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.CARD_BOOKING(startDate, endDate),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* sotryListSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse = yield call(availableSlotList, payload.startDate, payload.endDate);
        console.log('RESPONSEEEVALUEUEUUEUE', JSON.stringify(response));
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
