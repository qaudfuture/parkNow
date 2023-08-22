import React from 'react';
import { AuthStackNavigator } from './loginStack';
import { OnBoardingStackNavigator } from './onboardingStack';
import { TabNavigator } from './bottomtabStack';
// import DashboardStack from './dashbaordStack';
import { NavigationService } from './navigationService';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AppNavigatorProps = {
    isLoggedIn: boolean;
};

const AppNavigator: React.FC<AppNavigatorProps> = (props: AppNavigatorProps) => {
    const Stack = createNativeStackNavigator();

    const { isLoggedIn } = props;
    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <>
                    <TabNavigator />
                </>
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name='OnBoardingStack' component={OnBoardingStackNavigator} />
                    <Stack.Screen name='AuthStack' component={AuthStackNavigator} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export { NavigationService };
export default React.memo(AppNavigator);
