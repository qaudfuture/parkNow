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
import { formatattedTime } from '../../utils/dateUtils';

type CurrentBookingItemProps = {
    key?: string | number;
    name: string;
    startDate?: Date;
    endDate?: Date;
};

const PreviousBookingCard: React.FC<CurrentBookingItemProps> = (props: CurrentBookingItemProps) => {
    const { key = '', name = '', startDate, endDate } = props;
    console.log('STATRTATATA', startDate, endDate);
    const startBookingtime = formatattedTime(startDate);
    const endBookingTime = formatattedTime(endDate);

    return (
        <>
            <Spacer size='sm' />
            <Container key={key}>
                <LeftInnerContainer>
                    <ImageContainer>
                        <Image source={Images.userAvatar} resizeMode='contain' />
                    </ImageContainer>
                    <Spacer size='xs' />
                    <LeftPreviousBookingUserContainer>
                        <Text variant='body' style={{ fontSize: 14 }}>
                            {name}
                        </Text>
                        <Spacer size='xs' />
                        <Text variant='title' style={{ fontSize: 12 }}>
                            {startBookingtime} - {endBookingTime}
                        </Text>
                    </LeftPreviousBookingUserContainer>
                </LeftInnerContainer>
                <RightInnerContainer>
                    <Text variant='title' style={{ textAlign: 'right', fontSize: 12, color: 'gray' }}>
                        Today
                    </Text>
                </RightInnerContainer>
            </Container>
            <Spacer size='sm' />
        </>
    );
};

export default PreviousBookingCard;
