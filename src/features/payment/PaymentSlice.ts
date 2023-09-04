// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PaymentState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
    isCardBookloading: boolean;
    isCardBookdata?: unknown;
    isCardBookerror?: unknown;
    settlePaymentloading: boolean;
    settlePaymentdata?: unknown;
    settlePaymentrror?: unknown;
};

const initialState: PaymentState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
    isCardBookloading: false,
    isCardBookdata: undefined,
    isCardBookerror: undefined,
    settlePaymentloading: false,
    settlePaymentdata: undefined,
    settlePaymentrror: undefined,
};

const paymentReducer = createSlice({
    name: 'payments',
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
        requestaddPayment(state: PaymentState) {
            //action: PayloadAction
            return { ...state, addPaymentloading: true };
        },
        successaddPayment(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, addPaymentloading: false, addPaymentdata: action.payload, showToast: true };
        },
        erroraddPayment(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, isCardBookloading: false, isCardBookrror: action.payload, showToast: true };
        },
        clearaddPayment: () => initialState,
        requestgetettleAmount(state: PaymentState) {
            //action: PayloadAction
            return { ...state, settlePaymentloading: true };
        },
        successgetettleAmount(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, settlePaymentloading: false, settlePaymentdata: action.payload, showToast: true };
        },
        errorgetettleAmount(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, settlePaymentloading: false, settlePaymentrror: action.payload, showToast: true };
        },
        cleargetettleAmount: () => initialState,
    },
});

export const { actions } = paymentReducer;
export default paymentReducer.reducer;
