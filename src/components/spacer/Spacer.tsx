import React from 'react';
import { ViewStyle } from 'react-native';
import { SpacerProps, spacerSizes } from './type';
import { SpacerContainer } from './Spacer.style';

const Spacer: React.FC<SpacerProps> = ({ size = 'md', direction = 'vertical' }) => {
    const spaceValue = spacerSizes[size] || spacerSizes.md;

    const spacerStyle: ViewStyle = direction === 'vertical' ? { height: spaceValue } : { width: spaceValue };

    return <SpacerContainer style={spacerStyle} />;
};

export default Spacer;
