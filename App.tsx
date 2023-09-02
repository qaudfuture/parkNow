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
import { store } from './src/store';
import { getSelectedTheme } from './src/theme';
import Setup from './src/setup';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: React.FC = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = getSelectedTheme(colorScheme);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Setup />
            </ThemeProvider>
        </Provider>
    );
};
export default App;
