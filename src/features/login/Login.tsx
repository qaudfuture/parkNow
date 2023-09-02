import React from 'react';
import { Layout, Button, Text, TextInput, Spacer } from '../../components';
import validateForm from '../../hooks/useFormik';
import { useAuth } from '../../hooks';
// import { get } from 'lodash';
import { AppImage, TopContainer, MidContainer, BottomContainer } from './Login.styles';
import { Images } from '../../resources/images';
// import { useNavigation } from '@react-navigation/native';
// import { SecureStorageKey, SecureUtils } from '../utils/secureStorage';

import { RouteName } from '../../routes/routeName';
import { ScreenProps } from '../../routes/type';

export type OnLoginProps = ScreenProps<RouteName.LOGIN>;

const Login: React.FC<OnLoginProps> = (props: OnLoginProps) => {
    // const navigation = useNavigation();

    const { navigation } = props;
    const { useLoginForm } = validateForm();
    const { formik, handleFormValidation } = useLoginForm();

    const { dispatchLogin } = useAuth();
    // const error = get(loginData, ['error']);
    // const isLoading = get(loginData, ['loading'], false);

    const _onClickLogin = async () => {
        const validatedData = await handleFormValidation();
        if (validatedData) {
            dispatchLogin({ email: validatedData.email, password: validatedData.password });
            navigation.navigate(RouteName.LOGIN);
        }
    };

    return (
        <Layout.Base>
            <TopContainer>
                <AppImage source={Images.logo} resizeMode='contain' />
                <Text variant='title' style={{ textAlign: 'center' }}>
                    Welcome to ParkNow
                </Text>
                <Spacer size='sm' />
                <Text variant='body' style={{ textAlign: 'center' }}>
                    Please enter your email and password
                </Text>
            </TopContainer>
            <MidContainer>
                <Text variant='body' style={{ textAlign: 'left', color: 'gray' }}>
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
                <Text variant='body' style={{ textAlign: 'left', color: 'gray' }}>
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
                    buttonStyles={{
                        backgroundColor: '#FED94D',
                        marginBottom: 8,
                        width: '99%',
                        alignSelf: 'center',
                    }}
                    onPressButton={() => _onClickLogin()}
                />
                <Spacer size='md' />
                <Text variant='title' style={{ textAlign: 'center' }}>
                    You dont have an account?
                </Text>
            </MidContainer>
            <Spacer size='md' />
            <Text variant='title' style={{ textAlign: 'center', color: 'gray' }}>
                ------------ Or Log in with -----------
            </Text>
            <Spacer size='xl' />
            <BottomContainer>
                <Button
                    title='Google'
                    buttonStyles={{
                        backgroundColor: 'white',
                        height: '30%',
                        width: '47%',
                    }}
                    onPressButton={() => formik.handleSubmit()}
                />
                <Button
                    title='Facebook'
                    buttonStyles={{
                        backgroundColor: 'white',
                        height: '30%',
                        width: '47%',
                    }}
                    onPressButton={() => {}}
                />
            </BottomContainer>
        </Layout.Base>
    );
};

export default Login;
