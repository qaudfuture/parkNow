import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../features/login';
import { RouteName } from './routeName';

const { Navigator, Screen } = createNativeStackNavigator();

export const LoginStack = () => (
    <Navigator
        initialRouteName={RouteName.LOGIN}
        screenOptions={{
            headerShown: false,
        }}>
        <Screen key={RouteName.LOGIN} name={RouteName.LOGIN} component={Login} />
    </Navigator>
);
