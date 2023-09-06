import {
    Layout,
    DashBoardHeader,
    CustomCard,
    Text,
    Spacer,
    TransactionSelector,
    TransactionCard,
    Loader,
} from '../../components';
import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ImageContainer, ImageView } from './PaymentDetail.style';
import { Images } from '../../resources/images';
import { transactionSelector } from '../../constants/featureList';
import { RouteName } from '../../routes/routeName';
import { PaymentActions, AddPaymentActions } from '../payment';
import { get } from 'lodash';
import { DashbaordStackScreenProp } from '../../routes/type';
import { useAppDispatch, useAppSelector, useIsLoggedIn } from '../../hooks';

export type PaymentDetailsProp = DashbaordStackScreenProp<RouteName.PAYMENT_DETAILS>;

const PaymentDetails: React.FC<PaymentDetailsProp> = (props: PaymentDetailsProp) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();

    const _onClickAddPayment = () => navigation.navigate(RouteName.ADD_PAYMENT);
    const _onClickSettlePayment = () => navigation.navigate(RouteName.SETTLE_PAYMENT);
    const { user, userloading } = useIsLoggedIn();
    useEffect(() => {
        dispatch(PaymentActions.request({ userId: user?.id }));
        dispatch(AddPaymentActions.request({ userId: user?.id }));
    }, [user && !userloading]);

    const previousTransactions = useAppSelector((state) => state.payments.payment);

    const data = get(previousTransactions, 'data');
    const isLoading = get(previousTransactions, 'loading', false);
    // const error = get(previousTransactions, 'error');

    const getPendingPayments = useAppSelector((state) => state.payments.addpayment);
    console.log('getPendingPayments', getPendingPayments);

    const pendingPaymentData = get(getPendingPayments, 'data');
    const pendingAmount =
        pendingPaymentData != undefined &&
        pendingPaymentData?.reduce(
            (accumulator: number, currentValue: number) => accumulator + currentValue.amountToSettle,
            0,
        );
    const getPendingPaymentisLoading = get(getPendingPayments, 'loading', false);
    if (isLoading || getPendingPaymentisLoading) return <Loader />;

    return (
        <Layout.Base>
            <DashBoardHeader title='Payments' showBackButton={true} />
            <CustomCard style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text variant='title' style={{ fontSize: 14, color: 'gray' }}>
                    Total Pending Balane
                </Text>
                <Spacer size='sm' />
                <Text variant='title' style={{ fontSize: 20 }}>
                    AED {pendingAmount.toFixed(2)}
                </Text>
                <Spacer size='sm' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ alignItems: 'center', width: '40%' }} onPress={_onClickAddPayment}>
                        <ImageContainer color='#FED94D'>
                            <ImageView source={Images.pay} resizeMode='contain' />
                        </ImageContainer>
                        <Spacer size='sm' />
                        <Text variant='title' style={{ fontSize: 14, color: 'gray', textAlign: 'left' }}>
                            Add Payment
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', width: '40%' }} onPress={_onClickSettlePayment}>
                        <ImageContainer color='#FED94D'>
                            <ImageView source={Images.settleup} resizeMode='contain' />
                        </ImageContainer>
                        <Spacer size='sm' />
                        <Text variant='title' style={{ fontSize: 14, color: 'gray', textAlign: 'left' }}>
                            Settle Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </CustomCard>
            <Spacer size='md' />
            <Text variant='title' style={{ fontSize: 16, color: '#000', textAlign: 'left' }}>
                Transactions
            </Text>
            <Spacer size='md' />
            <View>
                <TransactionSelector data={transactionSelector} onPress={() => {}} />
            </View>
            <Spacer size='md' />
            <TransactionCard data={data} loggedInUser={user && !userloading && user.name} />
        </Layout.Base>
    );
};

export default PaymentDetails;
