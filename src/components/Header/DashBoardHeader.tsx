import React from 'react';
import { HeaderContainer, LeftContainer, BackImage } from './styles';
import { Text } from '../../components';
import { RouteService } from '../../routes/services';
import { Images } from '../../resources/images';

interface DashBoardHeaderProps {
    title: string;
    navigation: any; // You can use the correct type from @react-navigation/native
    showBackButton?: boolean;
    onBackButtonPressd?: void;
}
const DashBoardHeader: React.FC<DashBoardHeaderProps> = ({ title, showBackButton = true, onBackButtonPressd }) => {
    const _handleBackPress = () => {
        RouteService.goBack();
        onBackButtonPressd;
    };
    return (
        <HeaderContainer>
            {showBackButton && (
                <LeftContainer onPress={_handleBackPress}>
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
