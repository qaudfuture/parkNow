import React from 'react';
import { Text } from 'react-native';
import { HeaderContainer, LeftContainer, BackImage } from './styles';
import { Images } from '../../resources/images';

interface CustomHeaderProps {
    title: string;
    navigation: any; // You can use the correct type from @react-navigation/native
    showBackButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, navigation, showBackButton = true }) => {
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <HeaderContainer>
            {showBackButton && (
                <LeftContainer onPress={handleBackPress}>
                    <BackImage source={Images.backArrowDark} resizeMode='contain' />
                </LeftContainer>
            )}
            <Text>{title}</Text>
        </HeaderContainer>
    );
};

export default CustomHeader;
