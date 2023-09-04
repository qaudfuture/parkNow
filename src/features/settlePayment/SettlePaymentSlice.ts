// import { CardBookingAvailableSlotsPrams } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PaymentState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
    settlePaymentloading: boolean;
    settlePaymentdata?: unknown;
    settlePaymenterror?: unknown;
};

const initialState: PaymentState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
    settlePaymentloading: false,
    settlePaymentdata: undefined,
    settlePaymenterror: undefined,
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
        requestsettlepayment(state: PaymentState) {
            //action: PayloadAction
            return { ...state, settlePaymentloading: true };
        },
        successsettlepayment(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, settlePaymentloading: false, settlePaymentdata: action.payload, showToast: true };
        },
        errorsettlepayment(state: PaymentState, action: PayloadAction<unknown>) {
            return { ...state, settlePaymentloading: false, settlePaymenterror: action.payload, showToast: true };
        },
        clearsettlepayment: () => initialState,
    },
});

export const { actions } = addpaymentReducer;
export default addpaymentReducer.reducer;
