import { CardContainer, Image, CardImage } from './Card.style';
import { Text, Spacer } from '../../components';
import { Images } from '../../resources/images';
import React from 'react';

const Card = () => {
    return (
        <CardContainer>
            <Spacer size='md' />
            <Image source={Images.userAvatar} />
            <CardImage source={Images.addImage} />
            <Spacer size='md' />
            <Text variant='title'>Upload your Profile Picture</Text>
            <Spacer size='md' />
        </CardContainer>
    );
};

export default Card;
