import styled from 'styled-components/native';

export const StyledCard = styled.TouchableOpacity`
    background-color: ${({ color }) => color || 'white'};
    width: 135px;
    border-radius: 8px;
    padding: 16px;
`;
