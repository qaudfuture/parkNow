import React from 'react';
import { SafeAreaView } from 'react-native';
import { OnBoardingComp } from '../../components/onboarding';
import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnBoardProps = ScreenProps<RouteName.ONBOARDING>;

const OnBoarding: React.FC<OnBoardProps> = (props: OnBoardProps) => {
    const { navigation } = props;
    const _onClickRegister = () => navigation.navigate(RouteName.REGISTER);
    const _onClickLogin = () => navigation.navigate(RouteName.LOGIN);

    return (
        <SafeAreaView
            style={{
                backgroundColor: '#FFF',
                flex: 1,
            }}>
            <OnBoardingComp onClickRegister={_onClickRegister} onClickLogin={_onClickLogin} />
        </SafeAreaView>
    );
};

export default OnBoarding;
