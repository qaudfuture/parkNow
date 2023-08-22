import { StyledCard } from './CustomCard.style';
import { CardProps } from './type';
import React from 'react';

const CustomCard: React.FC<CardProps> = ({ children, color, ...rest }) => {
    return (
        <StyledCard color={color} {...rest}>
            {children}
        </StyledCard>
    );
};

export default CustomCard;
