import React, { useState, useEffect } from 'react';
import { Layout, Button, Text, TextInput, Spacer, CustomToast, Loader } from '../../components';
import validateForm from '../../hooks/useFormik';
import { useAuth } from '../../hooks';
import { get } from 'lodash';
import { AppImage, TopContainer, MidContainer, BottomContainer } from './Login.styles';
import { Images } from '../../resources/images';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';

import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnLoginProps = ScreenProps<RouteName.LOGIN>;

const Login: React.FC<OnLoginProps> = (props: OnLoginProps) => {
    const [status, setStatus] = useState<'success' | 'fail' | null>(null);

    // const navigation = useNavigation();

    const { navigation } = props;
    const { useLoginForm } = validateForm();
    const { formik, handleFormValidation } = useLoginForm();
    const _onClickRegister = () => navigation.navigate(RouteName.REGISTER);

    const { dispatchLogin, loginData } = useAuth();

    // const error = get(loginData, ['error']);
    const isLoading = get(loginData, ['loading'], false);
    const loggedInData = get(loginData, ['data'], false);
    const error = get(loginData, ['error'], false);

    useEffect(() => {
        setStatus('success');
    }, [loggedInData]);

    useEffect(() => {
        setStatus('fail');
    }, [error]);

    const _onClickLogin = async () => {
        const validatedData = await handleFormValidation();
        if (validatedData) {
            dispatchLogin({ email: validatedData.email, password: validatedData.password });
            // navigation.navigate(RouteName.LOGIN);
        }
    };
    const instantPopOut = () => {
        setStatus(null);
    };
    if (isLoading) return <Loader />;
    return (
        <Layout.Base>
            <TopContainer>
                <CustomToast status={status} instantPopOut={instantPopOut} />

                <AppImage source={Images.logo} resizeMode='contain' />
                <Text variant='title' style={styles.textAlign}>
                    Welcome to ParkNow
                </Text>
                <Spacer size='sm' />
                <Text variant='body' style={styles.textAlign}>
                    Please enter your email and password
                </Text>
            </TopContainer>
            <MidContainer>
                <Text variant='body' style={styles.subHeaderLeft}>
                    Enter your Email
                </Text>
                <Spacer size='xs' />
                <TextInput
                    placeholder='Email'
                    onBlur={formik.handleBlur('email')}
                    onChangeText={formik.handleChange('email')}
                    value={formik.values.email}
                    errorMsg={formik.touched.email && formik.errors.email}
                />
                <Spacer size='sm' />
                <Text variant='body' style={styles.subHeaderLeft}>
                    Enter your Password
                </Text>
                <Spacer size='xs' />
                <TextInput
                    placeholder='Password'
                    isPassword={true}
                    onBlur={formik.handleBlur('password')}
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                    errorMsg={formik.touched.password && formik.errors.password}
                />
                <Spacer size='md' />
                <Button
                    title='Sign up'
                    buttonStyles={{ ...styles.loginButton, backgroundColor: '#FED94D' }}
                    onPressButton={() => _onClickLogin()}
                />
                <Spacer size='md' />
                <TouchableOpacity onPress={_onClickRegister}>
                    <Text variant='title' style={styles.subHeaderText}>
                        You dont have an account? Sign up!
                    </Text>
                </TouchableOpacity>
            </MidContainer>
            <Spacer size='md' />
            <Text variant='title' style={{ ...styles.subHeaderText, color: 'gray' }}>
                ------------ Or Log in with -----------
            </Text>
            <Spacer size='xl' />
            <BottomContainer>
                <Button
                    title='Google'
                    buttonStyles={{ ...styles.socialLoginButtons, backgroundColor: '#FFF' }}
                    onPressButton={() => formik.handleSubmit()}
                />
                <Button
                    title='Facebook'
                    buttonStyles={{ ...styles.socialLoginButtons, backgroundColor: '#FFF' }}
                    onPressButton={() => {}}
                />
            </BottomContainer>
        </Layout.Base>
    );
};

export default Login;

const styles = StyleSheet.create({
    socialLoginButtons: {
        backgroundColor: 'white',
        height: '30%',
        width: '47%',
    },
    subHeaderText: {
        textAlign: 'center',
    },
    subHeaderLeft: { textAlign: 'left', color: 'gray' },
    textAlign: { textAlign: 'center' },
    loginButton: {
        marginBottom: 8,
        width: '99%',
        alignSelf: 'center',
    },
});
