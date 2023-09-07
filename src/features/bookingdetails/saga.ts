import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './BookingDetailsSlice';
// import { BookingType } from './type';

const { request, success, error } = actions;

// type ResponseTyp = {
//     results: BookingType[];
// };

export default function* bookingListSagaWatcher() {
    yield takeLatest(request, getUserBookingSagaWorker);
}

export function getUserBookings(userId: number) {
    const config: AxiosRequestConfig = {
        url: END_POINTS.BOOKEDCARD_FOR_USER(userId),
        method: 'GET',
    };

    return Network.networkCall(config);
}

export function* getUserBookingSagaWorker({ payload }: ReturnType<typeof request>) {
    try {
        const response: AxiosResponse = yield call(getUserBookings, payload.userId);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
