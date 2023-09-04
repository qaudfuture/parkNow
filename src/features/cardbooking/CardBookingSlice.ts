// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CardBookingState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
    isCardBookloading: boolean;
    isCardBookdata?: unknown;
    isCardBookerror?: unknown;
};

const initialState: CardBookingState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
    isCardBookloading: false,
    isCardBookdata: undefined,
    isCardBookerror: undefined,
};

const cardBookingReducer = createSlice({
    name: 'cardBooking',
    initialState,
    reducers: {
        request(state: CardBookingState) {
            //action: PayloadAction
            return { ...state, loading: true };
        },
        success(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload, showToast: true };
        },
        error(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload, showToast: true };
        },
        clear: () => initialState,
        requestCardBooking(state: CardBookingState) {
            //action: PayloadAction
            return { ...state, isCardBookloading: true };
        },
        successCardBooking(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, isCardBookloading: false, isCardBookdata: action.payload, showToast: true };
        },
        errorCardBooking(state: CardBookingState, action: PayloadAction<unknown>) {
            return { ...state, isCardBookloading: false, isCardBookerror: action.payload, showToast: true };
        },
        clearCardBooking: () => initialState,
    },
});

export const { actions } = cardBookingReducer;
export default cardBookingReducer.reducer;
