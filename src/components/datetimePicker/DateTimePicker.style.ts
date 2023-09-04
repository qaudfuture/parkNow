import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';

// Styled components for the pop-up and buttons
export const ModalContainer = styled(Modal)`
    justify-content: flex-end;
    margin: 0;
`;

export const ModalContent = styled.View`
    background-color: white;
    padding: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

export const ModalText = styled.Text`
    font-size: 18px;
`;

export const CloseButton = styled(TouchableOpacity)`
    margin-top: 16px;
    align-self: flex-end;
`;
