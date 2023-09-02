import React, { useEffect } from 'react';
import AppNavigator from '../routes';
// import { Loader } from '@TopStories/Component';
// import { navigationRef } from '../routes/services';
import SplashScreen from 'react-native-splash-screen';
import { useIsLoggedIn } from '../hooks';
import { setGlobalBaseUrl, setGlobalHeader } from '../network/axios';
import { NETWORK_CONST } from '../network/contants';

const Setup: React.FC = () => {
    const { isLoggedIn, accessToken } = useIsLoggedIn();

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }, []);

    // if (isLoading) return <Loader />;

    if (isLoggedIn) {
        setGlobalHeader(accessToken);
        setGlobalBaseUrl(NETWORK_CONST.BASE_URL);
    }

    return <AppNavigator isLoggedIn={isLoggedIn} />;
};

export default Setup;
