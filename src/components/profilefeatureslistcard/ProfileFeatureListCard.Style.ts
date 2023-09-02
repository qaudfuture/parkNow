import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    min-height: 8%;
`;

export const LeftInnerContainer = styled.View`
    flex-direction: row;
    width: 80%;
`;
export const ImageContainer = styled.View`
    padding: 6%;
    border-radius: 35px;
    background-color: ${({ color }) => color || 'white'};
`;

export const RightInnerContainer = styled.View`
    width: 20%;
    align-items: flex-end;
`;

export const LeftPreviousBookingUserContainer = styled.View`
    margin-left: 15px;
    justify-content: center;
    width: 80%;
`;

export const LeftContainer = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    padding: 5px;
`;

//background - color: ${ theme.colors.primary };
export const Image = styled.Image`
    height: 20px;
    width: 20px;
`;
