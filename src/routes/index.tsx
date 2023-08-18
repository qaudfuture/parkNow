import React from 'react';
import { LoginStack } from './loginStack';
import { OnBoardingStack } from './onboardingStack';
// import DashboardStack from './dashbaordStack';
import { NavigationService } from './navigationService';
import { NavigationContainer } from '@react-navigation/native';

type AppNavigatorProps = {
    isLoggedIn: boolean;
};

const AppNavigator: React.FC<AppNavigatorProps> = (props: AppNavigatorProps) => {
    const { isLoggedIn = false } = props;
    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <></>
            ) : (
                <>
                    <OnBoardingStack />
                    <LoginStack />
                </>
            )}
        </NavigationContainer>
    );
};

export { NavigationService };
export default React.memo(AppNavigator);
