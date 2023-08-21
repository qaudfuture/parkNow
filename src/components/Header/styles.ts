import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    justify-content: center;
    height: 60px;
`;

export const LeftContainer = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    padding: 5px;
`;
//background - color: ${ theme.colors.primary };
export const BackImage = styled.Image`
    height: 20px;
    width: 20px;
    justify-content: center;
`;

export const SignInButton = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    padding: 10px;
    border-radius: 30px;
    border: 1px solid #eaebec;
    align-self: flex-end;
`;

//background - color: ${ theme.colors.primary };
export const Image = styled.Image`
    height: 40px;
    width: 40px;
`;

export const ImageContainer = styled.View`
    margin-horizontal: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const DashBoardHeaderContainer = styled(HeaderContainer)`
    height: 100px;
`;
