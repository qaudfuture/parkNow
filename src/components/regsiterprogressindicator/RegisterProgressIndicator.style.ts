import styled from 'styled-components/native';

export const ProgressIndicatorContainer = styled.View`
    flexdirection: 'row';
    justify-content: space-between;
`;

export const ProgressIndicator = styled.View`
    border-radius: 6px;
    height: 3px;
    width: 48%;
    background-color: ${(props) => (props.isSecondScreen ? '#FED94D' : 'gray')};
`;
