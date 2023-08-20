import React from 'react';

import { View } from 'react-native';
import { Layout, TextInput, Text, Button, Header, RegisterProgressIndicator, Spacer, Card } from '../../components';
import useFormikWithRedux from '../../hooks/useFormik';
import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnRegisterProps = ScreenProps<RouteName.REGISTER>;

const RegisterProfileUpload: React.FC<OnRegisterProps> = (props: OnRegisterProps) => {
    const { navigation } = props;
    const _onClickLogin = () => navigation.navigate('AuthStack', { screen: RouteName.LOGIN });
    const { formik } = useFormikWithRedux();
    return (
        <Layout.Base
            header={<Header.LoginHeader _onClickLogin={_onClickLogin} />}
            footer={
                <Button
                    title='Sign up'
                    buttonStyles={{ backgroundColor: '#FED94D', marginBottom: 10, width: '90%', alignSelf: 'center' }}
                    onPressButton={() => {
                        formik.handleSubmit();
                    }}
                />
            }>
            <Text variant='header'>Set up your profile</Text>
            <Spacer size='md' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RegisterProgressIndicator isLastScreen={true} />
                <RegisterProgressIndicator isLastScreen={true} />
            </View>
            <Spacer size='md' />
            <Text variant='body'>You are almost there, Please upload the below details</Text>
            <Spacer size='md' />
            <Card />
            <Spacer size='md' />
            <TextInput
                placeholder='Car Number Plate'
                onBlur={formik.handleBlur('carNumberPlate')}
                onChangeText={formik.handleChange('carNumberPlate')}
                value={formik.values.carNumberPlate}
                errorMsg={formik.touched.confirmPassword && formik.errors.carNumberPlate}
            />
        </Layout.Base>
    );
};

export default RegisterProfileUpload;
