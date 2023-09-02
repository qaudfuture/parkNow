import React from 'react';
import { View } from 'react-native';
import { Layout, TextInput, Text, Button, Header, Spacer, RegisterProgressIndicator } from '../../components';
import validateForm from '../../hooks/useFormik';
// import useAuth from '../../hooks/useAuth';
import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type OnRegisterProps = ScreenProps<RouteName.REGISTER>;

interface RegistrationPros {
    navigationValu: OnRegisterProps;
}

const Register: React.FC<RegistrationPros> = (navigationValu) => {
    const { navigation } = navigationValu;
    const { useRegistrationForm } = validateForm();
    const { formik, handleValidation } = useRegistrationForm();
    // const { loginData, dispatchRegistration } = useAuth();

    const _onClickLogin = () => navigation.navigate(RouteName.LOGIN);
    const handleNextScreen = async () => {
        const validatedData = await handleValidation();
        if (validatedData) {
            navigation.navigate({ screen: RouteName.REGISTERUPLOAD, params: validatedData });
        }
    };
    return (
        <Layout.Base
            header={<Header.LoginHeader _onClickLogin={_onClickLogin} />}
            footer={
                <Button
                    title='Next'
                    buttonStyles={{
                        backgroundColor: '#FED94D',
                        marginBottom: 10,
                        width: '90%',
                        alignSelf: 'center',
                    }}
                    onPressButton={handleNextScreen}
                />
            }>
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'>
                <Text variant='header'>Set up your profile</Text>
                <Spacer size='md' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <RegisterProgressIndicator isLastScreen={true} width='48%' />
                    <RegisterProgressIndicator isLastScreen={false} width='48%' />
                </View>
                <Spacer size='sm' />
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
                    placeholder='Phone Number'
                    onBlur={formik.handleBlur('phonenumber')}
                    onChangeText={formik.handleChange('phonenumber')}
                    value={formik.values.phonenumber}
                    errorMsg={formik.touched.phonenumber && formik.errors.phonenumber}
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
            </KeyboardAwareScrollView>
        </Layout.Base>
    );
};

export default Register;
