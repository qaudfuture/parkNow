import {
    Layout,
    HomeHeader,
    CustomCard,
    Text,
    Spacer,
    PreviousBookingCard,
    FeatureListCard,
    Loader,
    Error,
} from '../../components';
import { featureList } from '../../constants/featureList';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    DashboardTopCard,
    DashboardTopInnerRightCard,
    DashboardTopInnerLeftCard,
    CardTopTextContainer,
} from './Dashboard.style';
import { get } from 'lodash';
import { DashBoardActions } from '../dashboard';
import { AddPaymentActions } from '../payment';

import { FlatList, Image, View } from 'react-native';
import { useAppDispatch, useAppSelector, useIsLoggedIn } from '../../hooks';
import { Images } from '../../resources/images';
import { getAvailableCards } from '../../utils/usedCard';

export type DashboardProps = DashbaordStackScreenProp<RouteName.DASHBOARD>;

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();
    const { user, userloading } = useIsLoggedIn();
    const _onClickCard = (screenName: string) => navigation.navigate(screenName);
    // useEffect(() => {
    //     dispatch(DashBoardActions.request());
    //     dispatch(AddPaymentActions.request({ userId: user?.id }));
    // }, [user && !userloading]);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(DashBoardActions.request());
            dispatch(AddPaymentActions.request({ userId: user?.id }));
        }, [user && !userloading]),
    );
    const getCurrentBookings = useAppSelector((state) => state.dashBoard);
    const getPendingPayments = useAppSelector((state) => state.payments.addpayment);

    const data = get(getCurrentBookings, 'data');
    const isLoading = get(getCurrentBookings, 'loading', false);
    const error = get(getCurrentBookings, 'error');

    const pendingPaymentData = get(getPendingPayments, 'data');
    const pendingAmount =
        pendingPaymentData != undefined &&
        pendingPaymentData?.reduce((accumulator, currentValue) => accumulator + currentValue.amountToSettle, 0);
    const getPendingPaymentisLoading = get(getPendingPayments, 'loading', false);
    // const getPendingPaymentserror = get(getPendingPayments, 'error');

    const availableCards = getAvailableCards(data);

    if (isLoading || getPendingPaymentisLoading || userloading) return <Loader />;

    const _renderCurrentBookingList = () => (
        <CustomCard>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data.slice(0, 3)}
                keyExtractor={(item) => item.id.toString()}
                onEndReachedThreshold={0.2}
                renderItem={({ item }) => {
                    const { user, endDate, startDate } = item;
                    const { name } = user;
                    const date = new Date(startDate);
                    return <PreviousBookingCard name={name} startDate={date} endDate={endDate} />;
                }}
            />
        </CustomCard>
    );

    const _renderEmptyCurrentBookingUI = () => {
        return (
            <CustomCard>
                <Spacer size='md' />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.booking} style={{ width: 100, height: 100 }} />
                    <Spacer size='sm' />
                    <Text variant='title'>No Cards booked for today</Text>
                </View>
                <Spacer size='md' />
            </CustomCard>
        );
    };

    return (
        <Layout.Base>
            <HomeHeader userName={!userloading && user && user.name} />
            <CustomCard color='#FED94D'>
                <DashboardTopCard>
                    <DashboardTopInnerLeftCard>
                        <Text variant='body'>1 card Booked</Text>
                        <Spacer size='md' />
                        <Text variant='header'>{availableCards}</Text>
                        <Text variant='title'>Available Cards</Text>
                    </DashboardTopInnerLeftCard>
                    <DashboardTopInnerRightCard>
                        <Text variant='header'>
                            {!userloading && user && pendingAmount != undefined ? pendingAmount.toFixed(2) : 'Nan'}
                        </Text>
                        <Text variant='title'>Pending Balance</Text>
                    </DashboardTopInnerRightCard>
                </DashboardTopCard>
            </CustomCard>
            <Spacer size='lg' />
            <CardTopTextContainer>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    Current Bookings
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </CardTopTextContainer>
            <Spacer size='md' />
            {data?.length ? _renderCurrentBookingList() : _renderEmptyCurrentBookingUI()}
            <Spacer size='lg' />
            <CardTopTextContainer>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    More Options
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </CardTopTextContainer>
            <Spacer size='sm' />
            <FeatureListCard data={featureList} onPress={_onClickCard} />
            {!data && error && <Error />}
        </Layout.Base>
    );
};

export default Dashboard;
