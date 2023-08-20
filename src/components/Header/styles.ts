import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flexdirection: 'row';
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 60px;
    backgroundcolor: '#2196F3';
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
