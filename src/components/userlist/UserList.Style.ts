import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    margin: 10px;
    align-items: center;
`;

export const ImageContainer = styled.View`
    border-radius: 35px;
    border-width: ${({ isSelected }) => (isSelected ? '4px' : '0px')};
    padding: 5px;
    border-color: ${({ theme }) => theme.colors.black};
`;

//background - color: ${ theme.colors.primary };
export const Image = styled.Image`
    height: 40px;
    width: 40px;
`;
