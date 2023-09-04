import { RegistrationSaga } from '../features/register';
import { LoginSaga } from '../features/login';
import { all } from 'redux-saga/effects';
import { CardBookingSaga } from '../features/cardbooking';
import { PaymentSaga, AddPaymentSaga, SettlePaymentSaga } from '../features/payment';
import { DashBoardSaga } from '../features/dashboard';

export default function* () {
    yield all([
        RegistrationSaga(),
        LoginSaga(),
        CardBookingSaga(),
        PaymentSaga(),
        AddPaymentSaga(),
        SettlePaymentSaga(),
        DashBoardSaga(),
    ]);
}
