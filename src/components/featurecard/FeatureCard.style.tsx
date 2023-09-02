import styled from 'styled-components/native';

export const StyledListItem = styled.TouchableOpacity`
    background-color: ${({ color }) => color || 'white'};
    justify-content: center;
    margin: 5px;
    padding: 16px;
    border-radius: 10px;
    width: 100px;
    height: 80px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.gray};
`;

export const Image = styled.Image`
    align-self: center;
    height: 30px;
    width: 30px;
`;
