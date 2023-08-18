import React from 'react';
import { Layout } from '@components/index';
import { OnBoardingComp } from '@components/onboarding';
// import { constantItems } from '../../components/onboarding'
// import { AuthStackScreenProp } from '@TopStories/Routes/type';
// import { RouteName } from '@TopStories/Routes/routeName';
// import { isEmail, isValidPassword } from '@TopStories/Validation';
// import { useAuth, useForm } from '@TopStories/Hook';
// import { get } from 'lodash';
// import { Text } from '@react-native-material/core';
// export type LoginProps = AuthStackScreenProp<RouteName.LOGIN>;

const OnBoarding: React.FC = () => {
    return (
        <Layout.Base footer={null}>
            <OnBoardingComp />
        </Layout.Base>
    );
};

export default OnBoarding;
