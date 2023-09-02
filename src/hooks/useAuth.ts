// import { LoginActions } from '@TopStories/Screen/Login';
import { useAppDispatch, useAppSelector } from './redux';
import { get } from 'lodash';
import { useState } from 'react';
import { RegistrationActions } from '../features/register';
import { LoginActions } from '../features/login';

export type SetLoginProps = {
    name: string;
    email: string;
    password: string;
    contactNumber: number;
    carNumber: string;
    imageS3Link: string;
    createdDate: string;
    updatedDate: string;
};

export type SetLoginAuthProps = {
    email: string;
    password: string;
};

const useAuth = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const dispatch = useAppDispatch();

    const authData = useAppSelector((state) => state.auth);
    const loginData = get(authData, 'login');
    const registrationData = get(authData, 'registration');

    const accesToken = get(loginData, ['data', 'access_token'], false);
    if (accesToken) setLoggedIn(true);

    const dispatchLogin = ({ email, password }: SetLoginAuthProps) => {
        dispatch(LoginActions.clearState());
        dispatch(LoginActions.request({ email, password }));
    };

    const dispatchRegistration = ({
        name,
        email,
        password,
        carNumber,
        contactNumber,
        imageS3Link,
        createdDate,
        updatedDate,
    }: SetLoginProps) => {
        dispatch(RegistrationActions.clear());
        dispatch(
            RegistrationActions.request({
                name,
                email,
                password,
                carNumber,
                contactNumber,
                imageS3Link,
                createdDate,
                updatedDate,
            }),
        );
    };

    const setLoggedOut = () => {
        dispatch(LoginActions.clearState());
    };

    return {
        isLoggedIn,
        loginData,
        registrationData,
        dispatchLogin,
        dispatchRegistration,
        setLoggedOut,
    };
};

export default useAuth;
