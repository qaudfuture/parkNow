import styled from 'styled-components/native';

export const StyledCard = styled.View`
    background-color: ${({ color }) => color || 'white'};
    border-radius: 8px;
    padding: 16px;
    shadow-color: ${({ theme }) => theme.colors.black};
    shadow-opacity: 0.2;
    shadow-offset: 0px 2px;
    shadow-radius: 4px;
    elevation: 3;
`;
