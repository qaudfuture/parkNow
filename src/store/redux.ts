import RegistrationActions from '../features/register/RegisterSlice';

import LoginReducer from '../features/login/LoginSlice';
import CardBookingReducer from '../features/cardbooking/CardBookingSlice';

import { combineReducers } from 'redux';

export default combineReducers({
    auth: combineReducers({
        login: LoginReducer,
        registration: RegistrationActions,
    }),
    cardBooking: CardBookingReducer,
});
