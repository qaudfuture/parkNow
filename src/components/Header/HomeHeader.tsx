import React from 'react';
import { DashBoardHeaderContainer, ImageContainer, Image } from './styles';
import { Images } from '../../resources/images';
import { Spacer, Text } from '../../components';

interface CustomHeaderProps {
    userName: string;
    navigation: any; // You can use the correct type from @react-navigation/native
    showBackButton?: boolean;
}

const HomeHeader: React.FC<CustomHeaderProps> = ({ userName }) => {
    return (
        <>
            <Spacer size='md' />
            <DashBoardHeaderContainer>
                <Spacer size='md' />
                <ImageContainer>
                    <Image source={Images.userAvatar} resizeMode='contain' />
                    <Image source={Images.notification} resizeMode='contain' />
                </ImageContainer>
                <Spacer size='md' />
                <Text variant='header'>Hello, {userName}</Text>
            </DashBoardHeaderContainer>
            <Spacer size='md' />
        </>
    );
};

export default HomeHeader;
