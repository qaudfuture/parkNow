import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LeftInnerContainer = styled.View`
    flex-direction: row;
    width: 80%;
`;
export const ImageContainer = styled.View``;

export const RightInnerContainer = styled.View`
    width: 20%;
`;

export const LeftPreviousBookingUserContainer = styled.View`
    margin-left: 15px;
    flex-direction: column;
    width: 80%;
`;

export const LeftContainer = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    padding: 5px;
`;

//background - color: ${ theme.colors.primary };
export const Image = styled.Image`
    height: 40px;
    width: 40px;
`;
