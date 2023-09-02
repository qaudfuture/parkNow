import React from 'react';
import { HeaderContainer, LeftContainer, BackImage } from './styles';
import { Text } from '../../components';
import { Images } from '../../resources/images';
interface DashBoardHeaderProps {
    title: string;
    navigation: any; // You can use the correct type from @react-navigation/native
    showBackButton?: boolean;
}
const DashBoardHeader: React.FC<DashBoardHeaderProps> = ({ title, navigation, showBackButton = true }) => {
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
            <Text variant='title' style={{ textAlign: 'center' }}>
                {title}
            </Text>
        </HeaderContainer>
    );
};
export default DashBoardHeader;
