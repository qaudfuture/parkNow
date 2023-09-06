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
    Loader,
} from '../../components';
import useAuth from '../../hooks/useAuth';
import { RouteName } from '../../routes/routeName';
import { get } from 'lodash';
import { ScreenProps } from '../../routes/type';
// import { useToast } from '../../components/toast/ToastProvider';

export type OnRegisterUploadProps = ScreenProps<RouteName.REGISTERUPLOAD>;

const RegisterProfileUpload: React.FC<OnRegisterUploadProps> = (props: OnRegisterUploadProps) => {
    // const [isShowToastNotification, setIsShowToastNotification] = useState(false);
    // const [status, setStatus] = useState<'success' | 'fail' | null>(null);

    const { navigation } = props;
    // const { showToast } = useToast();

    // const params = route.params;
    const userData = JSON.parse(get(props, ['route', 'params', 'userData']));

    const { registrationData, dispatchRegistration } = useAuth();
    // const isLoading = get(registrationData, ['loading'], false);
    const isSuccess = get(registrationData, ['data'], false);
    const isLoading = get(registrationData, ['loading'], false);
    // const isSuccess = get(registrationData, ['is'], false);
    // const isError = get(registrationData, ['error'], false);

    const name = userData.firstname.concat(userData.lastname);
    // useEffect(() => {
    //     if (showToast && showToast !== showToastRef.current) {
    //         setIsShowToastNotification(true);
    //     }
    //     showToastRef.current = showToast;
    // }, [showToast]);

    // useEffect(() => {
    //     setStatus('fail');
    // }, [isError]);

    // const instantPopOut = () => {
    //     setStatus(null);
    // };

    const _onClickLogin = () => {
        // setStatus('success');
        navigation.navigate(RouteName.LOGIN);
    };
    if (isSuccess) {
        _onClickLogin();
    }
    const _onClickRegister = () =>
        dispatchRegistration({
            name: name,
            email: userData.email,
            carNumber: userData.carNumberPlate,
            contactNumber: userData.phonenumber,
            password: userData.password,
            createdDate: new Date(),
            updatedDate: new Date(),
            imageS3Link: 'string',
            DeviceId: 'Iphone',
        });
    if (isLoading) return <Loader />;
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
            {/* <CustomToast status={status} instantPopOut={instantPopOut} /> */}
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
