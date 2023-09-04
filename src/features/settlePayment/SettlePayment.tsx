import { Layout, Spacer, DashBoardHeader, Button, TextInput, UserListCard, Text } from '../../components';
import React, { useState, useEffect } from 'react';
import { Loader } from '../../components';
import { DashbaordStackScreenProp } from '../../routes/type';
import { AddPaymentActions, SettlePaymentActions } from '../payment';
import { get } from 'lodash';
import { RouteName } from '../../routes/routeName';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ButtonContainer, TextInputContainer, UserListContainer } from './SettlePayment.style';

export type SettlePaymentProp = DashbaordStackScreenProp<RouteName.SETTLE_PAYMENT>;

const SettlePayment: React.FC<SettlePaymentProp> = (props: SettlePaymentProp) => {
    const { navigation } = props;
    const [amount, setAddAmount] = useState<string>('0.0');
    const [settleUpPayload, setSettleUpPayLoad] = useState<string>('0.0');

    const handleInputChange = (text: string) => {
        setAddAmount(text);
    };
    const dispatch = useAppDispatch();
    const settleUpUserData = useAppSelector((state) => state.payments.addpayment);

    const getSettlePaymentList = get(settleUpUserData, 'data');
    const isgetPaymentLoading = get(settleUpUserData, 'loading', false);

    const settleUpRequestData = useAppSelector((state) => state.payments.settlePayment);

    const getSettleUpResponse = get(settleUpRequestData, 'data');
    const getSettleUpResponseLoading = get(settleUpRequestData, 'loading', false);
    useEffect(() => {
        dispatch(AddPaymentActions.request({ userId: 23 }));
    }, []);

    const _onSettleUpSuccess = () => {
        dispatch(SettlePaymentActions.clear());
        navigation.navigate(RouteName.PAYMENT_SUCCESS);
    };

    useEffect(() => {
        getSettleUpResponse != undefined && _onSettleUpSuccess();
    }, [getSettleUpResponse]);

    const _onUserSelected = (selectedData) => {
        const settleData = {
            payerUserId: 1,
            receiverUserId: selectedData.user.id,
            amount: selectedData.amountToSettle,
            date: new Date(),
            createdDate: new Date(),
            modifiedDate: new Date(),
        };
        setAddAmount(selectedData.amountToSettle);
        setSettleUpPayLoad(settleData);
    };

    if (isgetPaymentLoading || getSettleUpResponseLoading) return <Loader />;

    const _OnClickSettleAmountPay = () => {
        dispatch(SettlePaymentActions.request(settleUpPayload));
    };
    return (
        <Layout.Base>
            <DashBoardHeader title='Settle Payments' showBackButton={true} />
            <Spacer size='md' />
            <Text variant='title'>People</Text>
            <UserListContainer>
                <UserListCard data={getSettlePaymentList} onPress={_onUserSelected} />
            </UserListContainer>
            <TextInputContainer>
                <TextInput
                    style={{ backgroundColor: 'transparent', fontSize: 44, borderWidth: 0, fontWeight: '800' }}
                    inputMode='decimal'
                    value={amount.toString()}
                    keyboardType='decimal-pad'
                    onChangeText={handleInputChange}
                    placeholder='0.0'
                    keyboardAppearance='dark'
                    onSubmitEditing={handleInputChange}
                />
            </TextInputContainer>
            <ButtonContainer>
                <Button
                    title='Pay'
                    buttonStyles={{
                        backgroundColor: '#FED94D',
                        marginBottom: 10,
                        width: '90%',
                        alignSelf: 'center',
                    }}
                    onPressButton={_OnClickSettleAmountPay}
                />
            </ButtonContainer>
        </Layout.Base>
    );
};

export default SettlePayment;
