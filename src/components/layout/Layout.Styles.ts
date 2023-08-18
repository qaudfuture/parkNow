import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    backgroundcolor: '#0D0D0D';
`;
export const Header = styled.KeyboardAvoidingView`
    height: 60px;
`;
//background - color: ${ theme.colors.primary };
export const Content = styled.View`
    flex: 1;
    padding-horizontal: 16px;
    flexgrow: 1;
`;
// paddingBottom: 16px;
export const Footer = styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
`;
//background - color: ${ theme.colors.primary };
