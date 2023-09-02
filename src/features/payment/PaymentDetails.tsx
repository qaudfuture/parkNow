import {
    Layout,
    DashBoardHeader,
    CustomCard,
    Text,
    Spacer,
    TransactionSelector,
    TransactionCard,
} from '../../components';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ImageContainer, ImageView } from './PaymentDetail.style';
import { Images } from '../../resources/images';
import { transactionSelector, TranasactionsHistory } from '../../constants/featureList';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';

export type PaymentDetailsProp = DashbaordStackScreenProp<RouteName.PAYMENT_DETAILS>;

const PaymentDetails: React.FC<PaymentDetailsProp> = (props: PaymentDetailsProp) => {
    const { navigation } = props;
    const _onClickAddPayment = () => navigation.navigate(RouteName.ADD_PAYMENT);
    const _onClickSettlePayment = () => navigation.navigate(RouteName.SETTLE_PAYMENT);

    return (
        <Layout.Base>
            <DashBoardHeader title='Payments' showBackButton={true} />
            <CustomCard style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text variant='title' style={{ fontSize: 14, color: 'gray' }}>
                    Total Pending Balane
                </Text>
                <Spacer size='sm' />
                <Text variant='title' style={{ fontSize: 20 }}>
                    AED 123
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
            <TransactionCard data={TranasactionsHistory} />
        </Layout.Base>
    );
};

export default PaymentDetails;
