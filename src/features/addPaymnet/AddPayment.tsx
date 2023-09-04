import { Layout, Spacer, DashBoardHeader, Button, TextInput, Loader } from '../../components';
import React, { useState, useEffect } from 'react';
import { PaymentActions } from '../payment';
import { get } from 'lodash';
import { TextInputContainer, ButtonContainer } from './AddPayment.style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
export type PaymentDetailsProp = DashbaordStackScreenProp<RouteName.ADD_PAYMENT>;

const AddPayment: React.FC<PaymentDetailsProp> = (props: PaymentDetailsProp) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();

    const [amount, setAddAmount] = useState<string>('0.0');
    const handleInputChange = (text: string) => {
        setAddAmount(text);
    };
    const paymentStatus = useAppSelector((state) => state.payments.addpayment);
    const dataStatus = get(paymentStatus, 'addPaymentdata');
    const isLoading = get(paymentStatus, 'addPaymentloading', false);

    const _OnClickPay = () => {
        const payment = {
            amount: amount,
            date: new Date(),
            payerUserId: 1,
            createdDate: new Date(),
            modifiedDate: new Date(),
        };
        dispatch(PaymentActions.requestaddPayment(payment));
    };

    useEffect(() => {
        if (dataStatus) {
            navigation.navigate(RouteName.PAYMENT_SUCCESS);
        }
    }, [dataStatus]);

    if (isLoading) return <Loader />;

    return (
        <Layout.Base>
            <DashBoardHeader title='Add Payments' showBackButton={true} />
            <Spacer size='md' />
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
                    onPressButton={_OnClickPay}
                />
            </ButtonContainer>
        </Layout.Base>
    );
};

export default AddPayment;
