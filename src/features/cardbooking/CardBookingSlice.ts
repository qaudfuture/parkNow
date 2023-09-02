// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CardBookingState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
};

const initialState: CardBookingState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
};

const cardBookingReducer = createSlice({
    name: 'cardBooking',
    initialState,
    reducers: {
        request(state: CardBookingState) {
            return { ...state, loading: true };
        },
        success(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload, showToast: true };
        },
        error(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload, showToast: true };
        },
        clear: () => initialState,
    },
});

export const { actions } = cardBookingReducer;
export default cardBookingReducer.reducer;
