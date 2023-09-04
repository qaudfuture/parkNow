import React, { useState } from 'react';
import {
    Layout,
    DashBoardHeader,
    AvailableCards,
    Text,
    Spacer,
    Button,
    RegisterProgressIndicator,
} from '../../components';
import { View, StyleSheet, FlatList } from 'react-native';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import { get } from 'lodash';
import { useAppDispatch } from '../../hooks';
import { CardBookingActions } from '../cardbooking';

export type AvailableSlotstProps = DashbaordStackScreenProp<RouteName.BOOK_CARDAVAILABLE_SLOTS>;

const CardBookingAvailableSlots: React.FC<AvailableSlotstProps> = (props: AvailableSlotstProps) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();

    const [cardParkSlots, setCardParkingSlots] = useState<Array>([]);

    const generateId = (slots) => {
        // Initialize a variable to keep track of the ID
        let idCounter = 1;

        // Add an ID property to each object in the array
        for (const obj of slots) {
            obj.id = idCounter;
            idCounter++;
        }
        setCardParkingSlots(slots);
    };

    const _OnCardPressed = (startDate: Date, endDate: Date, cardId: number): void => {
        // let cardBookingArr: {
        //     time: Date;
        //     startDate: Date;
        //     endDate: Date;
        //     userId: number;
        //     cardId: number;
        // }[] = [];

        const existingIndex = cardParkSlots.findIndex(
            (booking) => booking.startDate === startDate && booking.endDate === endDate && booking.cardId === cardId,
        );
        const parkedSlots = JSON.parse(JSON.stringify(cardParkSlots));
        if (existingIndex !== -1) {
            parkedSlots.splice(existingIndex, 1);
            setCardParkingSlots(parkedSlots);
        } else {
            const cardBookingSlots = {
                time: new Date(),
                startDate: startDate,
                endDate: endDate,
                userId: 1,
                cardId: cardId,
                parkedLocation: 'Dubai',
            };
            parkedSlots.push(cardBookingSlots);
            generateId(parkedSlots);
        }
    };

    const availableSlots = JSON.parse(get(props, ['route', 'params', 'availableSlots']));

    const cardParkingSlots =
        Object.keys(availableSlots) != null &&
        Object.keys(availableSlots) != undefined &&
        Object.keys(availableSlots)?.map((key) => ({
            title: key,
            data: availableSlots[key],
        }));

    const isCardSelected = (startDate, endDate, cardId) => {
        return cardParkSlots.some(
            (cardSelected) =>
                cardSelected?.startDate === startDate &&
                cardSelected?.endDate === endDate &&
                cardSelected?.cardId === cardId,
        );
    };

    const _onBookSlots = () => {
        navigation.navigate(RouteName.BOOK_CARDCONFIRM, { bookedSlots: JSON.stringify(cardParkSlots) });
    };

    const _onBackButtonPressed = () => {
        dispatch(CardBookingActions.clearCardBooking);
    };

    const renderItem = ({ item }) => {
        const dateTitle = new Date(item.title);
        const year = dateTitle.getUTCFullYear();
        const month = dateTitle.getUTCMonth() + 1;
        const day = dateTitle.getUTCDate();

        return (
            <View style={styles.item}>
                <Text variant='header' style={styles.headerText}>
                    {year}-{month}-{day}
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {item.data != undefined &&
                        item?.data?.map((cardData) => {
                            console.log('STARTSDATE', cardData.startDate, cardData.endDate);

                            const cardStartDate = new Date(cardData.startDate);
                            const cardEndDate = new Date(cardData.endDate);
                            const periodStartDate = cardStartDate.getTime() >= 12 ? 'PM' : 'AM';
                            const periodEndDate = cardEndDate.getTime() >= 12 ? 'PM' : 'AM';
                            const isBooked = isCardSelected(cardData.startDate, cardData.endDate, cardData.cardId);
                            return (
                                <>
                                    <Spacer size='sm' />
                                    <AvailableCards
                                        onPress={() =>
                                            _OnCardPressed(
                                                cardData.startDate,
                                                cardData.endDate,
                                                cardData.cardId,
                                                item.title,
                                            )
                                        }
                                        color={isBooked ? 'green' : 'rgba(254, 216, 77, 0.2)'}
                                        style={{ alignItems: 'center', marginVertical: 10 }}>
                                        <Text variant='title' style={{ color: '#FAB41B', fontSize: 16 }}>
                                            {cardStartDate.getUTCHours()}
                                            {periodStartDate} - {cardEndDate.getUTCHours()}
                                            {periodEndDate}
                                        </Text>
                                    </AvailableCards>
                                    <Spacer size='sm' />
                                </>
                            );
                        })}
                </View>
            </View>
        );
    };

    return (
        <Layout.Base>
            <DashBoardHeader title='Book Card' onBackButtonPressd={_onBackButtonPressed} />
            <Spacer size='sm' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
                <RegisterProgressIndicator isLastScreen={true} width='30%' />
                <RegisterProgressIndicator isLastScreen={false} width='30%' />
            </View>
            <Spacer size='md' />
            <Text variant='title' style={{ color: '#516980' }}>
                Select your Time Zone
            </Text>
            <Spacer size='md' />
            <Spacer size='sm' />
            <Text variant='title' style={{ color: '#516980', fontSize: 16 }}>
                Available time zone
            </Text>
            <Spacer size='md' />
            <FlatList
                data={cardParkingSlots != undefined && cardParkingSlots}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                    title='Book'
                    buttonStyles={{ backgroundColor: '#FED94D', width: '90%', alignSelf: 'center' }}
                    onPressButton={_onBookSlots}
                />
            </View>

            <Spacer size='xl' />
            <Spacer size='md' />
        </Layout.Base>
    );
};

export default CardBookingAvailableSlots;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    empty: {
        padding: 16,
        alignItems: 'center',
    },
});
