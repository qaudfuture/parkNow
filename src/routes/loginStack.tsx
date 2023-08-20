import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from '../features/register';
import { Login } from '../features/login';

import { RouteName } from './routeName';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => (
    <AuthStack.Navigator
        initialRouteName={RouteName.REGISTER}
        screenOptions={{
            headerShown: false,
        }}>
        <AuthStack.Screen key={RouteName.REGISTER} name={RouteName.REGISTER} component={Register} />
        <AuthStack.Screen key={RouteName.LOGIN} name={RouteName.LOGIN} component={Login} />
    </AuthStack.Navigator>
);