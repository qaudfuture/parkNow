import React from 'react';
import { TextInputProps, View, Text } from 'react-native';
import { StyledTextInput } from './TextInput.styles';
// Create a TypeScript interface for the StyledTextInputProps
interface StyledTextInputProps extends TextInputProps {
    isPassword?: boolean;
    isConfirmPassword?: boolean;
    errorMsg: string | boolean | undefined;
    isError?: boolean;
}

const CustomTextInput: React.FC<StyledTextInputProps> = (props: StyledTextInputProps) => {
    const { isPassword = false, isConfirmPassword = false, errorMsg = '' } = props;
    return (
        <View>
            <StyledTextInput
                {...props}
                error={errorMsg}
                placeholderTextColor='#6B7378'
                secureTextEntry={isPassword || isConfirmPassword}
            />
            {errorMsg && <Text>{errorMsg}</Text>}
        </View>
    );
};

export default CustomTextInput;
