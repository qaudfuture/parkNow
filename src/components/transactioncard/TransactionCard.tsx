import React from 'react';
import {
    Container,
    LeftInnerContainer,
    RightInnerContainer,
    Image,
    ImageContainer,
    LeftPreviousBookingUserContainer,
} from './Transaction.style';
import { FlatList } from 'react-native';
import { Spacer, Text } from '../../components';
import { TransactionCardProps, TransactionCardListProps } from './type';
import { Images } from '../../resources/images';

const defaultProps: Partial<TransactionCardProps> = {
    payedBy: 'Harsha',
    date: '23-07-2023',
    image: Images.userAvatar,
    amount: 120,
    isPayment: true,
    loggedInUser: 'string',
};
const TransactionCard: React.FC<TransactionCardProps> = ({
    data,
    loggedInUser,
}: TransactionCardProps & typeof defaultProps) => {
    const renderItem = ({ item }: { item: TransactionCardListProps }) => {
        const transactionDate = item?.date.split('T')[0];
        console.log('STATTUSS', item, loggedInUser);

        return (
            <>
                <Spacer size='xs' />
                <Container>
                    <LeftInnerContainer>
                        <ImageContainer>
                            <Image source={Images.userAvatar} resizeMode='contain' />
                        </ImageContainer>
                        <Spacer size='xs' />
                        <LeftPreviousBookingUserContainer>
                            <Spacer size='xs' />
                            <Text variant='body' style={{ fontSize: 14 }}>
                                {item.isPayment ? loggedInUser : item.payedBy}
                            </Text>
                            <Spacer size='xs' />
                            <Text variant='title' style={{ fontSize: 12 }}>
                                {transactionDate}
                            </Text>
                        </LeftPreviousBookingUserContainer>
                    </LeftInnerContainer>
                    <RightInnerContainer>
                        <Text
                            variant='title'
                            style={{ textAlign: 'right', fontSize: 12, color: item.isPayment ? 'red' : 'green' }}>
                            {item.amount?.toFixed(2)}
                        </Text>
                    </RightInnerContainer>
                </Container>
                <Spacer size='xs' />
            </>
        );
    };

    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} />;
};

export default TransactionCard;
