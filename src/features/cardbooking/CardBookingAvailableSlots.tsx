import React from 'react';
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

export type AvailableSlotstProps = DashbaordStackScreenProp<RouteName.BOOK_CARDAVAILABLE_SLOTS>;

const CardBookingAvailableSlots: React.FC<AvailableSlotstProps> = (props: AvailableSlotstProps) => {
    // const [cardParkingSlots, setCardParkingSlots] = useState({});
    // const { navigation } = props;
    const _OnCardPressed = () => {};
    const availableSlots = JSON.parse(get(props, ['route', 'params', 'availableSlots']));

    console.log('availableSlotsVALUUEU', availableSlots);
    console.log('availableSlotsVALUUEU', typeof availableSlots);

    const cardParkingSlots =
        Object.keys(availableSlots) != null &&
        Object.keys(availableSlots) != undefined &&
        Object.keys(availableSlots)?.map((key) => ({
            title: key,
            data: availableSlots[key],
        }));

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
                            console.log('cardDatacardData', cardData);
                            const cardStartDate = new Date(cardData.startDate);
                            const cardEndDate = new Date(cardData.endDate);
                            const periodStartDate = cardData.startDate >= 12 ? 'PM' : 'AM';
                            const periodEndDate = cardData.endDate >= 12 ? 'PM' : 'AM';
                            return (
                                <>
                                    <Spacer size='sm' />
                                    <AvailableCards
                                        onPress={() => _OnCardPressed(item)}
                                        color='rgba(254, 216, 77, 0.2)'
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
            <DashBoardHeader title='Book Card' />
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
                    title='Check Availability'
                    buttonStyles={{ backgroundColor: '#FED94D', width: '90%', alignSelf: 'center' }}
                    onPressButton={() => {}}
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
