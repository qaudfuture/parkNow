import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${({ color }) => color || 'transparent'};
    border: 2px solid ${({ theme }) => theme.colors.lightgray};
    border-radius: 20px;
    min-width: 30%;
    align-items: center;
    align-self: flex-start;
    padding-horizontal: 10px;
    margin-right: 10px;
`;
