// import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';
import { useAppSelector } from './redux';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { LoginActions } from '../features/login';
import AsyncStorage from '@react-native-community/async-storage';

// interface LoggedInData {
//     // Define the structure of your logged-in data here
//     user: {};
//     // Add other properties as needed
// }

const getAccessToken = async (cb: React.Dispatch<React.SetStateAction<string>>) => {
    const token = (await AsyncStorage.getItem('accessToken')) || '';
    cb(token);
};

// const fetchLoggedInUser = async (cb: React.Dispatch<React.SetStateAction<null>>) => {
//     let userDetails = (await AsyncStorage.getItem('userData')) || null;
//     userDetails = JSON.parse(userDetails);
//     console.log('tokentokentoken', userDetails);
//     cb(userDetails);
// };

const useIsLoggedIn = () => {
    const [accessToken, setAccessToken] = useState('');
    const [user, setUser] = useState(null);
    const [userloading, setUserLoading] = useState(true);
    // const [loggedInData, setLoggedInData] = useState<LoggedInData | null>(null);
    const loginData = useAppSelector((state) => state.auth.login.data);
    const isLoading = useAppSelector((state) => state.auth.login.loading);
    const logOut = () => store.dispatch(LoginActions.clear());

    useEffect(() => {
        getAccessToken(setAccessToken);
        // fetchLoggedInUser(setUser);
    }, []);

    useEffect(() => {
        const fetchLoggedInUser = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    const parsedUserData = JSON.parse(userData);
                    setUser(parsedUserData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setUserLoading(false);
            }
        };

        fetchLoggedInUser();
    }, []);

    const isLoggedIn = get(loginData, 'token', false) || accessToken;

    return { isLoggedIn: !!isLoggedIn, accessToken, isLoading, logOut, user, userloading };
};

export default useIsLoggedIn;
