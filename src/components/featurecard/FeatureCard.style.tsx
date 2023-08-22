import styled from 'styled-components/native';

export const StyledListItem = styled.View`
    background-color: ${({ color }) => color || 'white'};
    justify-content: center;
    margin: 5px;
    padding: 16px;
    border-radius: 10px;
    width: 100px;
    height: 80px;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
`;

export const Image = styled.Image`
    align-self: center;
    height: 30px;
    width: 30px;
`;
