import React, { useEffect, useState } from 'react';
import {
    Layout,
    DashBoardHeader,
    Text,
    Spacer,
    Loader,
    CustomToast,
    BookingDetail,
    CustomCard,
} from '../../components';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import { get } from 'lodash';
import { View, Image } from 'react-native';
import { Images } from '../../resources/images';
import { BookingDetailsActions } from '../bookingdetails';
import { useAppDispatch, useAppSelector, useIsLoggedIn } from '../../hooks';

export type BookingDetailsProps = DashbaordStackScreenProp<RouteName.BOOKING_DETAILS>;
//props: BookingDetailsProps
const BookingDetails: React.FC<BookingDetailsProps> = () => {
    const [status, setStatus] = useState<'success' | 'fail' | null>(null);

    // const { navigation } = props;
    const dispatch = useAppDispatch();
    const { user, userloading } = useIsLoggedIn();

    useEffect(() => {
        dispatch(BookingDetailsActions.request({ userId: user?.id }));
    }, [user && !userloading]);

    const userBooking = useAppSelector((state) => state.bookingDetails);
    const data = get(userBooking, 'data');
    const isLoading = get(userBooking, 'loading', false);
    const error = get(userBooking, 'error');

    useEffect(() => {
        setStatus('success');
    }, [data && !isLoading]);

    useEffect(() => {
        setStatus('fail');
    }, [error]);

    console.log('USERRRR', user);

    if (isLoading || userloading) return <Loader />;

    const _onEditSelectedBooking = (bookedSlot) => {
        console.log('bookedSlotEDITTSTSTS', bookedSlot);
    };
    const instantPopOut = () => {
        setStatus(null);
    };

    const _renderEmptyCurrentBookingUI = () => {
        return (
            <>
                <CustomCard>
                    <Spacer size='md' />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Images.booking} style={{ width: 100, height: 100 }} />
                        <Spacer size='sm' />
                        <Text variant='title'>No Parking cards Booked</Text>
                    </View>
                    <Spacer size='md' />
                </CustomCard>
            </>
        );
    };

    return (
        <Layout.Base>
            <DashBoardHeader title='My Bookings' />
            <CustomToast status={status} instantPopOut={instantPopOut} />

            <Spacer size='md' />
            <Text variant='title' style={{ color: '#516980' }}>
                Booking Details
            </Text>
            <Spacer size='md' />
            <View style={{ marginBottom: 10 }}>
                {data?.length ? (
                    <BookingDetail data={data} onEditBooking={_onEditSelectedBooking} />
                ) : (
                    _renderEmptyCurrentBookingUI()
                )}
            </View>
            <Spacer size='xl' />
        </Layout.Base>
    );
};

export default BookingDetails;
