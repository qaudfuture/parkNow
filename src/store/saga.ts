import { RegistrationSaga } from '../features/register';
import { LoginSaga } from '../features/login';
import { all } from 'redux-saga/effects';
import { CardBookingSaga } from '../features/cardbooking';

export default function* () {
    yield all([RegistrationSaga(), LoginSaga(), CardBookingSaga()]);
}
