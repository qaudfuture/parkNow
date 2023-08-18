import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { FontFamily } from '../../constants/fontFamily';

// Define your typography styles here
const typographyStyles = {
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: FontFamily.BOLD,
        // Add any other common styles for headers
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // Add any other common styles for titles
    },
    body: {
        fontSize: 16,
        // Add any other common styles for body text
    },
    // Add more typography variants as needed
};

type TypographyVariant = keyof typeof typographyStyles;

interface TypographyProps {
    variant: TypographyVariant;
    style?: TextStyle;
    children: React.ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, style, children }) => {
    const textStyle: TextStyle = typographyStyles[variant] || typographyStyles.body;

    return <Text style={[textStyle, style]}>{children}</Text>;
};

export default Typography;
