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
import { TransactionCardProps } from './type';
import { Images } from '../../resources/images';

const defaultProps: Partial<TransactionCardProps> = {
    name: 'Harsha',
    transactionDate: '23-07-2023',
    image: Images.userAvatar,
    payment: 120,
    incoming: true,
};
const TransactionCard: React.FC<TransactionCardProps> = ({ data }: TransactionCardProps & typeof defaultProps) => {
    const renderItem = () => (
        <>
            <Spacer size='xs' />
            <Container>
                <LeftInnerContainer>
                    <ImageContainer>
                        <Image source={Images.userAvatar} resizeMode='contain' />
                    </ImageContainer>
                    <Spacer size='xs' />
                    <LeftPreviousBookingUserContainer>
                        <Text variant='body' style={{ fontSize: 14 }}>
                            Harsha
                        </Text>
                        <Spacer size='xs' />
                        <Text variant='title' style={{ fontSize: 12 }}>
                            PreviousBookingCard
                        </Text>
                    </LeftPreviousBookingUserContainer>
                </LeftInnerContainer>
                <RightInnerContainer>
                    <Text variant='title' style={{ textAlign: 'right', fontSize: 12, color: 'gray' }}>
                        Today
                    </Text>
                </RightInnerContainer>
            </Container>
            <Spacer size='xs' />
        </>
    );

    return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index} />;
};

export default TransactionCard;
