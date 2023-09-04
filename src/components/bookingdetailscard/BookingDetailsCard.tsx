import React from 'react';
import {
    Container,
    LeftInnerContainer,
    RightInnerContainer,
    LeftPreviousBookingUserContainer,
} from './BookingDetailsCard.style';
import { FlatList } from 'react-native';
import { Spacer, Text } from '../../components';
import { BookingDetailProps, BookingDetailListProps } from './type';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const defaultProps: Partial<BookingDetailListProps> = {
    startDate: '2023-09-03T18:00:00+00:00',
    endDate: '2023-09-03T18:00:00+00:00',
};
const BookingDetail: React.FC<BookingDetailProps> = ({
    data,
    onEditBooking,
}: BookingDetailProps & typeof defaultProps) => {
    const renderItem = ({ item }: { item: BookingDetailListProps }) => {
        const dateTitle = new Date(item.startDate);
        const year = dateTitle.getUTCFullYear();
        const month = dateTitle.getUTCMonth() + 1;
        const day = dateTitle.getUTCDate();
        const endDate = new Date(item.endDate);
        const starthours = dateTitle.getUTCHours();
        const startminutes = dateTitle.getUTCMinutes();
        const endhours = endDate.getUTCHours();
        const endminutes = endDate.getUTCMinutes();
        const periodStartDate = starthours >= 12 ? 'PM' : 'AM';
        const periodEndDate = endhours >= 12 ? 'PM' : 'AM';
        return (
            <>
                <Spacer size='xs' />
                <Container>
                    <LeftInnerContainer>
                        <Spacer size='xs' />
                        <LeftPreviousBookingUserContainer>
                            <Text variant='body' style={{ fontSize: 14 }}>
                                {day}-{month}-{year}
                            </Text>
                            <Spacer size='xs' />
                            <Text variant='title' style={{ fontSize: 12 }}>
                                {starthours}:{startminutes} {periodStartDate} - {endhours}:{endminutes} {periodEndDate}
                            </Text>
                        </LeftPreviousBookingUserContainer>
                    </LeftInnerContainer>
                    <RightInnerContainer>
                        <FontAwesome name='edit' color='#C6C7CD' size={20} onPress={() => onEditBooking(item)} />
                    </RightInnerContainer>
                </Container>
                <Spacer size='xs' />
            </>
        );
    };

    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} />;
};

export default BookingDetail;
