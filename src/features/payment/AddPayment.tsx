import { Layout, Spacer, DashBoardHeader, Button, TextInput } from '../../components';
import React, { useState } from 'react';
import { View } from 'react-native';
// import { ImageContainer, ImageView } from './PaymentDetail.style';
// import { Images } from '../../resources/images';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
// import { transactionSelector, TranasactionsHistory } from '../../constants/featureList';
export type PaymentDetailsProp = DashbaordStackScreenProp<RouteName.ADD_PAYMENT>;

const AddPayment: React.FC<PaymentDetailsProp> = (props: PaymentDetailsProp) => {
    const { navigation } = props;
    const [amount, setAddAmount] = useState<string>('0.0');
    const handleInputChange = (text: string) => {
        setAddAmount(text);
    };
    const _OnClickPay = () => navigation.navigate(RouteName.PAYMENT_SUCCESS);
    return (
        <Layout.Base>
            <DashBoardHeader title='Add Payments' showBackButton={true} />
            <Spacer size='md' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Button
                    title='Pay'
                    buttonStyles={{ backgroundColor: '#FED94D', marginBottom: 10, width: '90%', alignSelf: 'center' }}
                    onPressButton={_OnClickPay}
                />
            </View>
        </Layout.Base>
    );
};

export default AddPayment;
