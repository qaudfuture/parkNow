import React from 'react';
import { StyleProp, ViewStyle, TouchableOpacity, TextStyle } from 'react-native';
import { Text } from '../text';

type ButtonProps = {
    buttonStyles?: StyleProp<ViewStyle>;
    titleStyles?: TextStyle;
    title: string;
    buttonColor?: string;
    onPressButton(): void;
};

const defaultProps: Partial<ButtonProps> = {
    title: 'Attendance',
    buttonStyles: {
        borderRadius: 15,
        minHeight: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '30%',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    titleStyles: {},
};
const Button: React.FC<ButtonProps> = ({
    title,
    onPressButton,
    buttonStyles,
    titleStyles,
    ...props
}: ButtonProps & typeof defaultProps) => {
    return (
        <TouchableOpacity {...props} style={[defaultProps.buttonStyles, buttonStyles]} onPress={onPressButton}>
            <Text variant='title' style={titleStyles}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export default Button;
