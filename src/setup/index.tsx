import React, { useEffect } from 'react';
import AppNavigator from '../routes';
import { Loader } from '../components/loader';

// import { navigationRef } from '../routes/services';
import SplashScreen from 'react-native-splash-screen';
import { useIsLoggedIn } from '../hooks';
import { setGlobalBaseUrl } from '../network/axios';
import { NETWORK_CONST } from '../network/contants';
import { setGlobalHeader } from '../network/axios';
//setGlobalHeader accessToken
const Setup: React.FC = () => {
    const { isLoggedIn, isLoading, accessToken } = useIsLoggedIn();

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }, []);

    if (isLoading) return <Loader />;

    if (isLoggedIn && accessToken != '') {
        setGlobalHeader(accessToken);
        setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
    }

    return <AppNavigator isLoggedIn={isLoggedIn} />;
};

export default Setup;
