import React, { useEffect, useState } from 'react';
import {
    Layout,
    DashBoardHeader,
    Text,
    Spacer,
    Button,
    DatePicker,
    RegisterProgressIndicator,
    Loader,
} from '../../components';
// import moment from 'moment';
import { get } from 'lodash';
import { View } from 'react-native';
import { CardBookingActions } from '../cardbooking';
import { DashbaordStackScreenProp } from '../../routes/type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RouteName } from '../../routes/routeName';
// import { bookSelector } from '../../constants/featureList';

export type OnCardBookingProps = DashbaordStackScreenProp<RouteName.BOOK_CARD>;

interface CardBookingPros {
    navigationProps: OnCardBookingProps;
}

const CardBooking: React.FC<CardBookingPros> = (navigationProps) => {
    const dispatch = useAppDispatch();
    const { navigation } = navigationProps;
    const [selectedDates, SetSelectedDate] = useState();

    // const [bookingType, selectedBookingType] = useState<'multiple' | 'single'>('single');
    // const [datePicker, setEnableDatePicker] = useState<boolean>(false);

    const handleSingleDaySelect = (date: DateObject) => {
        // Handle the selected single date
        SetSelectedDate(date);
    };

    const handleMultipleDaysSelect = (dates: DateObject[]) => {
        // Handle the selected multiple dates
        SetSelectedDate(dates);
    };
    const cardBookingSlots = useAppSelector((state) => state.cardBooking);

    const data = get(cardBookingSlots, 'data');
    const isLoading = get(cardBookingSlots, 'loading', false);
    // const error = get(cardBookingSlots, 'error');

    const getPayLoad = () => {
        const selectedType = selectedDates.length;

        if (selectedType != undefined) {
            return { startDate: selectedDates[0].dateString, endDate: selectedDates.pop().dateString };
        }
        return { startDate: selectedDates.dateString, endDate: selectedDates.dateString };
    };

    const convertToJson = (inputJson: {}) => {
        const abc = {};
        for (const cardId in inputJson.availableParkingCards) {
            inputJson.availableParkingCards[cardId].forEach((slot) => {
                for (const slotTime in slot.availableSlot) {
                    const slotData = slot.availableSlot[slotTime].map((slotItem) => ({
                        startDate: slotItem.startDate,
                        endDate: slotItem.endDate,
                        cardId: parseInt(cardId),
                    }));
                    if (!abc[slotTime]) {
                        abc[slotTime] = slotData;
                    } else {
                        abc[slotTime] = abc[slotTime].concat(slotData);
                    }
                }
            });
        }
        return abc;
    };

    useEffect(() => {
        if (data) {
            const result = convertToJson(data);
            navigation.navigate(RouteName.BOOK_CARDAVAILABLE_SLOTS, { availableSlots: JSON.stringify(result) });
        }
    }, [data]);

    const _OnCheckAvailablity = () => {
        const payLoad = getPayLoad();
        // const startBookingDate = moment(payLoad.startDate, 'YYYY-MM-DD').format('YYYY-DD-MM');
        // const endBookingDate = moment(payLoad.endDate, 'YYYY-MM-DD').format('YYYY-DD-MM');
        dispatch(CardBookingActions.request({ startDate: payLoad.startDate, endDate: payLoad.endDate }));
    };

    if (isLoading) return <Loader />;

    return (
        <Layout.Base>
            <DashBoardHeader title='Book Card' />
            <Spacer size='sm' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
                <RegisterProgressIndicator isLastScreen={false} width='30%' />
                <RegisterProgressIndicator isLastScreen={false} width='30%' />
            </View>
            <Spacer size='md' />

            <Text variant='title' style={{ color: '#516980' }}>
                Select your date
            </Text>
            <Spacer size='md' />
            <DatePicker onSingleDaySelect={handleSingleDaySelect} onMultipleDaysSelect={handleMultipleDaysSelect} />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                    title='Check Availability'
                    buttonStyles={{ backgroundColor: '#FED94D', width: '90%', alignSelf: 'center' }}
                    onPressButton={_OnCheckAvailablity}
                />
            </View>
            <Spacer size='xl' />
            <Spacer size='md' />
        </Layout.Base>
    );
};

export default CardBooking;
