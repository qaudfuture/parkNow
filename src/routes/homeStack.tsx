import React from 'react';
import { RouteName } from './routeName';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardStackParamList } from './type';
import { Dashboard } from '../features/dashboard';
import { CardBooking, CardBookingAvailableSlots, CardBookConfirm, CardBookingSuccess } from '../features/cardbooking';
import { PaymentDetails, AddPaymentDetails, PaymentSuccess, SettlePayment } from '../features/payment';
import { BookingDetails } from '../features/bookingdetails';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
            initialRouteName={RouteName.DASHBOARD}>
            <Stack.Screen name={RouteName.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={RouteName.BOOK_CARD} component={CardBooking} />
            <Stack.Screen name={RouteName.PAYMENT_DETAILS} component={PaymentDetails} />
            <Stack.Screen name={RouteName.ADD_PAYMENT} component={AddPaymentDetails} />
            <Stack.Screen name={RouteName.PAYMENT_SUCCESS} component={PaymentSuccess} />
            <Stack.Screen name={RouteName.SETTLE_PAYMENT} component={SettlePayment} />
            <Stack.Screen name={RouteName.BOOK_CARDAVAILABLE_SLOTS} component={CardBookingAvailableSlots} />
            <Stack.Screen name={RouteName.BOOK_CARDCONFIRM} component={CardBookConfirm} />
            <Stack.Screen name={RouteName.BOOK_CARDSUCCEESS} component={CardBookingSuccess} />
            <Stack.Screen name={RouteName.BOOKING_DETAILS} component={BookingDetails} />
        </Stack.Navigator>
    );
};

export default DashboardStack;
