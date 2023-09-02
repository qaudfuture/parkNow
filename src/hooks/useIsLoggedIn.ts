import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';
import { useAppSelector } from './redux';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { LoginActions } from '../features/login';

const getAccessToken = async (cb: React.Dispatch<React.SetStateAction<string>>) => {
    const token = (await SecureUtils.get(SecureStorageKey.ACCESS_TOKEN)) || '';
    console.log('tokentokentoken', token);

    cb(token);
};

const useIsLoggedIn = () => {
    const [accessToken, setAccessToken] = useState('');

    const loginData = useAppSelector((state) => state.auth.login.data);
    const isLoading = useAppSelector((state) => state.auth.login.loading);
    const logOut = () => store.dispatch(LoginActions.clear());

    useEffect(() => {
        getAccessToken(setAccessToken);
    }, []);

    const isLoggedIn = get(loginData, 'access_token', false) || accessToken;

    return { isLoggedIn: !!isLoggedIn, accessToken, isLoading, logOut };
};

export default useIsLoggedIn;
