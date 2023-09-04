// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PaymentState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
};

const initialState: PaymentState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
};

const addpaymentReducer = createSlice({
    name: 'addPayment',
    initialState,
    reducers: {
        request(state: PaymentState) {
            //action: PayloadAction
            return { ...state, loading: true };
        },
        success(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload, showToast: true };
        },
        error(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload, showToast: true };
        },
        clear: () => initialState,
    },
});

export const { actions } = addpaymentReducer;
export default addpaymentReducer.reducer;
