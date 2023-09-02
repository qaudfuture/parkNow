import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, RegisterProfileUpload } from '../features/register';
import { Login } from '../features/login';

import { TabNavigator } from '../routes/bottomtabStack';

import { RouteName } from './routeName';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => (
    <AuthStack.Navigator
        // initialRouteName={RouteName.REGISTER}
        screenOptions={{
            headerShown: false,
        }}>
        <AuthStack.Screen key={RouteName.REGISTER} name={RouteName.REGISTER} component={Register} />
        <AuthStack.Screen
            key={RouteName.REGISTERUPLOAD}
            name={RouteName.REGISTERUPLOAD}
            component={RegisterProfileUpload}
        />
        <AuthStack.Screen key={RouteName.LOGIN} name={RouteName.LOGIN} component={Login} />
        <AuthStack.Screen name='DashboardStack' component={TabNavigator} />
    </AuthStack.Navigator>
);
