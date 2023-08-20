import styled from 'styled-components/native';

// Define your styled TextInput component
export const StyledTextInput = styled.TextInput`
    padding: 15px;
    font-size: 16px;
    border-radius: 15px;
    background-color: lightgray;
    border: 2px solid ${(props) => (props.error ? 'red' : '#eaebec')};
    margin-vertical: 8px;
`;
