import React from 'react';
import { AuthStackNavigator } from './loginStack';
// import { OnBoardingStackNavigator } from './onboardingStack';
import { TabNavigator } from './bottomtabStack';
// import DashboardStack from './homeStack';

// import DashboardStack from './dashbaordStack';
import { navigationRef } from '../routes/services';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AppNavigatorProps = {
    isLoggedIn: boolean;
};

const AppNavigator: React.FC<AppNavigatorProps> = (props: AppNavigatorProps) => {
    // const Stack = createNativeStackNavigator();
    const { isLoggedIn } = props;

    return (
        <NavigationContainer ref={navigationRef}>
            {isLoggedIn ? <TabNavigator /> : <AuthStackNavigator />}
            {/* <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {isLoggedIn ? (
                    <Stack.Screen name='DashboardStack' component={TabNavigator} />
                ) : (
                    <>
                        <Stack.Screen name='OnBoardingStack' component={OnBoardingStackNavigator} />
                        <Stack.Screen name='AuthStack' component={AuthStackNavigator} />
                    </>
                )}
            </Stack.Navigator> */}
            {/* )} */}
        </NavigationContainer>
    );
};

export default React.memo(AppNavigator);
