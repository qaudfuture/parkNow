import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoarding } from '../features/onboarding';
import { RouteName } from './routeName';

const OnboardingStack = createNativeStackNavigator();
export const OnBoardingStackNavigator = () => (
    <OnboardingStack.Navigator
        initialRouteName={RouteName.ONBOARDING}
        screenOptions={{
            headerShown: false,
        }}>
        <OnboardingStack.Screen key={RouteName.ONBOARDING} name={RouteName.ONBOARDING} component={OnBoarding} />
    </OnboardingStack.Navigator>
);
