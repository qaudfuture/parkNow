import React from 'react';
import { View } from 'react-native';
import {
    Layout,
    // TextInput,
    Text,
    Button,
    Header,
    RegisterProgressIndicator,
    Spacer,
    Card,
} from '../../components';
import useAuth from '../../hooks/useAuth';
import { RouteName } from '../../routes/routeName';
import { get } from 'lodash';
import { ScreenProps } from '../../routes/type';

export type OnRegisterUploadProps = ScreenProps<RouteName.REGISTERUPLOAD>;

const RegisterProfileUpload: React.FC<OnRegisterUploadProps> = (props: OnRegisterUploadProps) => {
    // const [isShowToastNotification, setIsShowToastNotification] = useState(false);
    const { navigation, route } = props;
    const params = route.params;
    const { registrationData, dispatchRegistration } = useAuth();
    // const isLoading = get(registrationData, ['loading'], false);
    const isSuccess = get(registrationData, ['data'], false);
    // const showToast = get(registrationData, ['showToast'], false);
    // const showToastRef = useRef(showToast);

    // const isError = get(registrationData, ['error'], false);

    const name = params.firstname.concat(params.lastname);
    // useEffect(() => {
    //     if (showToast && showToast !== showToastRef.current) {
    //         setIsShowToastNotification(true);
    //     }
    //     showToastRef.current = showToast;
    // }, [showToast]);

    const _onClickLogin = () => {
        console.log('ONMLOGINCLIKEDDd');

        navigation.navigate('AuthStack', { screen: RouteName.LOGIN });
    };
    if (isSuccess) {
        _onClickLogin();
    }
    const _onClickRegister = () =>
        dispatchRegistration({
            name: name,
            email: params.email,
            carNumber: params.carNumberPlate,
            contactNumber: params.phonenumber,
            password: params.password,
            createdDate: '2023-08-30T11:27:49.893Z',
            updatedDate: '2023-08-30T11:27:49.893Z',
            imageS3Link: 'string',
        });

    return (
        <Layout.Base
            header={<Header.LoginHeader _onClickLogin={_onClickLogin} />}
            footer={
                <Button
                    title='Sign up'
                    buttonStyles={{ backgroundColor: '#FED94D', marginBottom: 10, width: '90%', alignSelf: 'center' }}
                    onPressButton={_onClickRegister}
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
        </Layout.Base>
    );
};

export default RegisterProfileUpload;
