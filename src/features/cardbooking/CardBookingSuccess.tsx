import { Layout, Text, Spacer, Button, DashBoardHeader } from '../../components';
import React from 'react';
import { Container, TopContainer, BottomContainer, Image } from './CardBooking.style';
import { Images } from '../../resources/images';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
// import { useFocusEffect } from '@react-navigation/native';
// import { transactionSelector, TranasactionsHistory } from '../../constants/featureList';
export type BookCardSuccesssProp = DashbaordStackScreenProp<RouteName.BOOK_CARDSUCCEESS>;

const CardBookingSuccess: React.FC<BookCardSuccesssProp> = (props: BookCardSuccesssProp) => {
    const { navigation } = props;
    navigation.setOptions({ tabBarVisible: true });

    const _OnClickSuccess = () => {
        navigation.navigate(RouteName.DASHBOARD);
    };
    return (
        <Layout.Base>
            <DashBoardHeader title='Card Booking Success' showBackButton={false} />
            <Spacer size='md' />
            <Container>
                <TopContainer>
                    <Image source={Images.success} />
                    <Spacer size='xl' />
                    <Text variant='title' style={{ color: 'green' }}>
                        Card Booked Success fully
                    </Text>
                    <Spacer size='md' />
                    <Text variant='body' style={{ textAlign: 'center' }}>
                        Your booking has been done successfully
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
                        onPressButton={_OnClickSuccess}
                    />
                </BottomContainer>
            </Container>
        </Layout.Base>
    );
};

export default CardBookingSuccess;
