import React from 'react';
import { SafeAreaView } from 'react-native';
import { OnBoardingComp } from '../../components/onboarding';
import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnBoardProps = ScreenProps<RouteName.ONBOARDING>;

const OnBoarding: React.FC<OnBoardProps> = (props: OnBoardProps) => {
    const { navigation } = props;
    const _onClickRegistre = () => navigation.navigate('AuthStack', { screen: RouteName.REGISTER });
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#0D0D0D',
                flex: 1,
            }}>
            <OnBoardingComp onClickRegister={_onClickRegistre} onClickLogin={() => {}} />
        </SafeAreaView>
    );
};

export default OnBoarding;
