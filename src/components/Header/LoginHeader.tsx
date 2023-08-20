import React from 'react';
import { Text } from 'react-native';
import { HeaderContainer, LeftContainer, BackImage, SignInButton } from './styles';
import { Images } from '../../resources/images';
interface LoginHeaderProps {
    title: string;
    navigation: any; // You can use the correct type from @react-navigation/native
    showBackButton?: boolean;
    _onClickLogin(): void;
}
const LoginHeader: React.FC<LoginHeaderProps> = ({ title, navigation, showBackButton = true, _onClickLogin }) => {
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
            <SignInButton onPress={_onClickLogin}>
                <Text>Sign In</Text>
            </SignInButton>
            <Text>{title}</Text>
        </HeaderContainer>
    );
};
export default LoginHeader;
