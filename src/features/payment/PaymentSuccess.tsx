import { Layout, Text, Spacer, Button, DashBoardHeader } from '../../components';
import React from 'react';
import { Container, TopContainer, BottomContainer, Image } from './PaymentDetail.style';
import { Images } from '../../resources/images';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import { useAppDispatch } from '../../hooks';
import { SettlePaymentActions } from '../payment';
// import { useFocusEffect } from '@react-navigation/native';
// import { transactionSelector, TranasactionsHistory } from '../../constants/featureList';
export type PaymentSuccesssProp = DashbaordStackScreenProp<RouteName.PAYMENT_SUCCESS>;

const PaymentSuccess: React.FC<PaymentSuccesssProp> = (props: PaymentSuccesssProp) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();

    const _onClickSuccessButton = () => {
        dispatch(SettlePaymentActions.clear());
        navigation.navigate(RouteName.DASHBOARD);
    };
    return (
        <Layout.Base>
            <DashBoardHeader title='Payments Success' showBackButton={true} />
            <Spacer size='md' />
            <Container>
                <TopContainer>
                    <Image source={Images.success} />
                    <Spacer size='xl' />
                    <Text variant='title' style={{ color: 'green' }}>
                        Payment Successfully Added
                    </Text>
                    <Spacer size='md' />
                    <Text variant='body' style={{ textAlign: 'center' }}>
                        Your card Payment has been sucessfully Added,Click Ok to Navigate to DashBoard Screen
                    </Text>
                </TopContainer>
                <BottomContainer>
                    <Button
                        title='Okay'
                        buttonStyles={{
                            backgroundColor: '#FED94D',
                            marginBottom: 10,
                            width: '90%',
                            alignSelf: 'center',
                        }}
                        onPressButton={_onClickSuccessButton}
                    />
                </BottomContainer>
            </Container>
        </Layout.Base>
    );
};

export default PaymentSuccess;
