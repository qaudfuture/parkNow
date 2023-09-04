import RegistrationActions from '../features/register/RegisterSlice';

import LoginReducer from '../features/login/LoginSlice';
import CardBookingReducer from '../features/cardbooking/CardBookingSlice';
import PaymentReducer from '../features/payment/PaymentSlice';
import AddPaymentReducer from '../features/payment/AddPaymentSlice';
import SettlePaymentReducer from '../features/payment/SettlePaymentSlice';

import DashBoardReducer from '../features/dashboard/DashBoardSlice';

import { combineReducers } from 'redux';

export default combineReducers({
    auth: combineReducers({
        login: LoginReducer,
        registration: RegistrationActions,
    }),
    cardBooking: CardBookingReducer,
    payments: combineReducers({
        payment: PaymentReducer,
        addpayment: AddPaymentReducer,
        settlePayment: SettlePaymentReducer,
    }),
    dashBoard: DashBoardReducer,
});
