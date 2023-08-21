import React from 'react';
import {
    Container,
    LeftInnerContainer,
    RightInnerContainer,
    Image,
    ImageContainer,
    LeftPreviousBookingUserContainer,
} from './PreviousBookingCard.style';
import { Images } from '../../resources/images';
import { Spacer, Text } from '../../components';

const PreviousBookingCard = () => {
    return (
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
    );
};

export default PreviousBookingCard;
