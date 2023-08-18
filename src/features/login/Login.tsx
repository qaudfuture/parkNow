import React from 'react';
import { Layout, TextInput, Text } from '@components/index';
import { Button } from '@components/Button';
const Login: React.FC = () => {
    return (
        <Layout.Base
            footer={
                <Button
                    title='Sign up'
                    buttonStyles={{ backgroundColor: '#FED94D', marginBottom: 10, width: '90%', alignSelf: 'center' }}
                    onPressButton={() => {}}
                />
            }>
            <Text variant='header'>Set up your profile</Text>
            <Text variant='body' style={{ marginVertical: 15 }}>
                Create your account so you can manage your parking cards faster
            </Text>
            <TextInput placeholder='First Name' />
            <TextInput placeholder='Last Name' />
            <TextInput placeholder='Email' />
            <TextInput placeholder='Password' isPassword={true} />
            <TextInput placeholder='Car Number Plate' />
            <TextInput placeholder='Confirm Password' isConfirmPassword={true} />
        </Layout.Base>
    );
};

export default Login;
