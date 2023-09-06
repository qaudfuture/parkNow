/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './src/store';
import { getSelectedTheme } from './src/theme';
import { ErrorBoundry } from './src/components';
import Setup from './src/setup';
import { PersistGate } from 'redux-persist/integration/react';
// import { ToastProvider } from './src/components/toast/ToastProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Import your ToastProvider component

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: React.FC = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = getSelectedTheme(colorScheme);

    return (
        // <ToastProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ErrorBoundry>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ThemeProvider theme={theme}>
                            <Setup />
                        </ThemeProvider>
                    </PersistGate>
                </Provider>
            </ErrorBoundry>
        </GestureHandlerRootView>
        // </ToastProvider>
    );
};
export default App;
