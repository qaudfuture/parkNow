import { END_POINTS, Network } from '../../network';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './DashBoardSlice';
// import { StoryType } from './type';

const { request, success, error } = actions;
// type ResponseTyp = {
//     results: StoryType[];
// };

export default function* getDashBoardBookingListSagaWatcher() {
    yield takeLatest(request, getCurrentBookingSagaWorker);
}
export function getCurrentBookings() {
    const config: AxiosRequestConfig = {
        url: END_POINTS.TODAY_BOOKED_CARD,
        method: 'GET',
    };

    return Network.networkCall(config);
}

//{}: ReturnType<typeof request>
//Removed payload
export function* getCurrentBookingSagaWorker() {
    try {
        const response: AxiosResponse = yield call(getCurrentBookings);
        yield put(success(response.data));
    } catch (_error) {
        yield put(error(_error));
    }
}
