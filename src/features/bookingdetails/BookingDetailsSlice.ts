// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type BookingDetailsState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
};

const initialState: BookingDetailsState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
};

const bookingDetailsReducer = createSlice({
    name: 'bookingDetails',
    initialState,
    reducers: {
        request(state: BookingDetailsState) {
            //action: PayloadAction
            return { ...state, loading: true };
        },
        success(state: BookingDetailsState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload, showToast: true };
        },
        error(state: BookingDetailsState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload, showToast: true };
        },
        clear: () => initialState,
    },
});

export const { actions } = bookingDetailsReducer;
export default bookingDetailsReducer.reducer;
