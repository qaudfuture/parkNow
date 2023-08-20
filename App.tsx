/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/routes/index';
import SplashScreen from 'react-native-splash-screen';
import { store } from './src/store/redux';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <AppNavigator isLoggedIn={false} />
        </Provider>
    );
};
export default App;
