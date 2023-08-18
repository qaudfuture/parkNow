import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoarding } from '../features/onboarding';
import { RouteName } from './routeName';

const { Navigator, Screen } = createNativeStackNavigator();
export const OnBoardingStack = () => (
    <Navigator
        initialRouteName={RouteName.LOGIN}
        screenOptions={{
            headerShown: false,
        }}>
        <Screen key={RouteName.ONBOARDING} name={RouteName.ONBOARDING} component={OnBoarding} />
    </Navigator>
);
