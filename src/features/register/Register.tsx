import React from 'react';
import { Layout, TextInput, Text, Button, Header } from '../../components';
import useFormikWithRedux from '../../hooks/useFormik';
import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnRegisterProps = ScreenProps<RouteName.REGISTER>;

const Register: React.FC<OnRegisterProps> = (props: OnRegisterProps) => {
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
            <Text variant='body' style={{ marginVertical: 15 }}>
                Create your account so you can manage your parking cards faster
            </Text>
            <TextInput
                placeholder='First Name'
                onBlur={formik.handleBlur('firstname')}
                onChangeText={formik.handleChange('firstname')}
                value={formik.values.firstname}
                errorMsg={formik.touched.firstname && formik.errors.firstname}
            />
            <TextInput
                placeholder='Last Name'
                onBlur={formik.handleBlur('lastname')}
                onChangeText={formik.handleChange('lastname')}
                value={formik.values.lastname}
                errorMsg={formik.touched.lastname && formik.errors.lastname}
            />
            <TextInput
                placeholder='Email'
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
                value={formik.values.email}
                errorMsg={formik.touched.email && formik.errors.email}
            />
            <TextInput
                placeholder='Password'
                isPassword={true}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
                value={formik.values.password}
                errorMsg={formik.touched.password && formik.errors.password}
            />
            <TextInput
                placeholder='Car Number Plate'
                onBlur={formik.handleBlur('carNumberPlate')}
                onChangeText={formik.handleChange('carNumberPlate')}
                value={formik.values.carNumberPlate}
                errorMsg={formik.touched.confirmPassword && formik.errors.carNumberPlate}
            />
            <TextInput
                placeholder='Confirm Password'
                isConfirmPassword={true}
                onBlur={formik.handleBlur('confirmPassword')}
                onChangeText={formik.handleChange('confirmPassword')}
                value={formik.values.confirmPassword}
                errorMsg={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
        </Layout.Base>
    );
};

export default Register;
