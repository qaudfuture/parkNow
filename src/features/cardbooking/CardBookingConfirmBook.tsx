import React, { useEffect, useState } from 'react';
import {
    Layout,
    DashBoardHeader,
    Text,
    Spacer,
    Button,
    RegisterProgressIndicator,
    BookingDetail,
    BottomCard,
    DateTimePicker,
    Loader,
} from '../../components';
import { View } from 'react-native';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import { get } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CardBookingActions } from '../cardbooking';
// import { localTime } from '../../utils/dateUtils';

export type BookCardConfirmProps = DashbaordStackScreenProp<RouteName.BOOK_CARDCONFIRM>;

const CardBookConfirm: React.FC<BookCardConfirmProps> = (props: BookCardConfirmProps) => {
    const dispatch = useAppDispatch();
    const { navigation } = props;
    const [editDateType, setEditDateType] = useState('');
    const [bookingDetails, setbookingDetails] = useState([]);

    const [isVisible, setIsVisible] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const bookedSlots = JSON.parse(get(props, ['route', 'params', 'bookedSlots']));

    useEffect(() => {
        setbookingDetails(bookedSlots);
    }, []);
    const cardBookingStatus = useAppSelector((state) => state.cardBooking);
    const dataStatus = get(cardBookingStatus, 'isCardBookdata');
    const isLoading = get(cardBookingStatus, 'isCardBookloading', false);

    const hideDatePicker = () => {
        setIsModalVisible(false);
    };

    const handleDateCancel = () => {
        hideDatePicker();
    };

    const _onEditSelectedBooking = (bookedSlot) => {
        setSelectedBooking(bookedSlot);
        setIsVisible(true);
    };

    const hidePopUp = () => {
        setIsVisible(false);
    };

    const showDateTimePicker = (editDateType: string) => {
        setIsVisible(false);
        setTimeout(() => {
            setIsModalVisible(true);
        }, 2000);
        setEditDateType(editDateType);
    };

    function separateDateFromUTC(utcTimeString) {
        // Create a Date object from the UTC time string
        const date = new Date(utcTimeString);

        // Extract the date parts
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
        const day = date.getUTCDate();

        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return formattedDate;
    }

    function separateTimeFromUTC(utcTimeString) {
        // Create a Date object from the UTC time string
        const date = new Date(utcTimeString);

        // Extract the time parts
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        // Format the time as "HH:MM:SS"
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;

        return formattedTime;
    }

    const combineDateAndTime = (dateString, timeString) => {
        // Date and time components
        const date = dateString;
        const time = timeString;

        // Combine date and time with 'T' in between
        const combinedDateTime = date + 'T' + time;

        return combinedDateTime;
    };

    function updateBookedSlotValue<T>(bookedSlots: T[], bookedSlot: T, idKey: keyof T): T[] {
        return bookedSlots.map((obj) => (obj[idKey] === bookedSlot[idKey] ? bookedSlot : obj));
    }

    const bookingSlots = bookingDetails?.map((obj) => {
        // Create a copy of the object without the 'id' property
        const { id, ...newObj } = obj;
        console.log('id', id);
        return newObj;
    });

    // Call the function to remove "id" from each object
    const onTimeChanged = (changedtime: Date, timeType: string) => {
        const originalTimestamp = changedtime;

        // Parse the original timestamp into a Date object
        const originalDate = new Date(originalTimestamp);

        // Add 4 hours to the Date object
        originalDate.setHours(originalDate.getHours() + 4);

        // Format the adjusted date and time back into ISO 8601 format
        const formattedTimestamp = originalDate.toISOString();
        const separatedTime = separateTimeFromUTC(formattedTimestamp);
        const bookedSlot = JSON.parse(JSON.stringify(selectedBooking));
        if (timeType == 'START') {
            const separatedDate = separateDateFromUTC(bookedSlot.startDate);
            const combinedDateTime = combineDateAndTime(separatedDate, separatedTime);
            // const selectedDate = new Date(combinedDateTime);
            bookedSlot.startDate = combinedDateTime;
            setSelectedBooking(bookedSlot);
            const updatedSlot = updateBookedSlotValue(bookedSlots, bookedSlot, 'id');
            setbookingDetails(updatedSlot);
        } else {
            const separatedDate = separateDateFromUTC(bookedSlot.endDate);
            const combinedDateTime = combineDateAndTime(separatedDate, separatedTime);
            // const newDate = addHours(selectedDate, 8);
            bookedSlot.endDate = combinedDateTime;
            setSelectedBooking(bookedSlot);
            const updatedSlot = updateBookedSlotValue(bookedSlots, bookedSlot, 'id');
            setbookingDetails(updatedSlot);
        }

        setIsModalVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 2000);
    };

    useEffect(() => {
        if (dataStatus) {
            navigation.navigate(RouteName.BOOK_CARDSUCCEESS);
        }
    }, [dataStatus]);

    const _confirmBookingCard = () => {
        dispatch(CardBookingActions.requestCardBooking(bookingSlots));
    };

    if (isLoading) return <Loader />;
    return (
        <Layout.Base>
            <DashBoardHeader title='Book Card' />
            <Spacer size='sm' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
            </View>
            <Spacer size='md' />
            <Text variant='title' style={{ color: '#516980' }}>
                Booking Details
            </Text>
            <Spacer size='md' />
            <BookingDetail data={bookingDetails} onEditBooking={_onEditSelectedBooking} />
            <DateTimePicker
                onTimeSelected={onTimeChanged}
                editTimeType={editDateType}
                isVisible={isModalVisible}
                onCancel={handleDateCancel}
            />
            <BottomCard
                isVisble={isVisible}
                onPress={hidePopUp}
                selectedCard={selectedBooking}
                onStartTimeSelected={() => showDateTimePicker('START')}
                onEndTimeSelected={() => showDateTimePicker('END')}
            />

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                    title='Confirm Booking'
                    buttonStyles={{ backgroundColor: '#FED94D', width: '90%', alignSelf: 'center' }}
                    onPressButton={_confirmBookingCard}
                />
            </View>
            <Spacer size='md' />
        </Layout.Base>
    );
};

export default CardBookConfirm;
