import React from 'react';
import { TextInputProps, View, Text } from 'react-native';
import { StyledTextInput } from './TextInput.styles';
// Create a TypeScript interface for the StyledTextInputProps
interface StyledTextInputProps extends TextInputProps {
    isPassword?: boolean;
    isConfirmPassword?: boolean;
    errorMsg?: string;
    isError?: boolean;
}

const CustomTextInput: React.FC<StyledTextInputProps> = (props: StyledTextInputProps) => {
    const { isPassword = false, isConfirmPassword = false, isError = false, errorMsg = '' } = props;
    const showError = isError && errorMsg;
    return (
        <View>
            <StyledTextInput
                {...props}
                placeholderTextColor='#6B7378'
                secureTextEntry={isPassword || isConfirmPassword}
            />
            {showError && <Text>{errorMsg}</Text>}
        </View>
    );
};

export default CustomTextInput;
