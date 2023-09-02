import { Layout, Spacer, DashBoardHeader, Button, TextInput, UserListCard, Text } from '../../components';
import React, { useState } from 'react';
import { View } from 'react-native';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import { UserList } from '../../constants/featureList';
export type SettlePaymentProp = DashbaordStackScreenProp<RouteName.SETTLE_PAYMENT>;

const SettlePayment: React.FC<SettlePaymentProp> = (props: SettlePaymentProp) => {
    const { navigation } = props;
    const [amount, setAddAmount] = useState<string>('0.0');
    const handleInputChange = (text: string) => {
        setAddAmount(text);
    };
    const _OnClickSettleAmountPay = () => navigation.navigate(RouteName.PAYMENT_SUCCESS);
    return (
        <Layout.Base>
            <DashBoardHeader title='Settle Payments' showBackButton={true} />
            <Spacer size='md' />
            <Text variant='title'>People</Text>
            <View>
                <UserListCard
                    data={UserList}
                    onPress={(value) => {
                        console.log('value', value);
                    }}
                />
            </View>
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
                    onPressButton={_OnClickSettleAmountPay}
                />
            </View>
        </Layout.Base>
    );
};

export default SettlePayment;
