import styled from 'styled-components/native';

export const CardContainer = styled.View`
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.lightgray};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gray};
    height: 30%;
`;

export const Image = styled.Image`
    height: 100px;
    width: 100px;
`;
export const CardImage = styled.Image`
    position: absolute;
    top: 100;
    right: 135;
    height: 25px;
    width: 25px;
`;
