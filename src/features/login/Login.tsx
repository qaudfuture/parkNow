import React from 'react';
import { Layout, Button, Text, TextInput, Spacer } from '../../components';
import useFormikWithRedux from '../../hooks/useFormik';
import { AppImage, TopContainer, MidContainer, BottomContainer } from './Login.styles';
import { Images } from '../../resources/images';

const Login = () => {
    const { formik } = useFormikWithRedux();
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
                    onPressButton={() => {}}
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
