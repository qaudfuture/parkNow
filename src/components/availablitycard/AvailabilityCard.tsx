import { StyledCard } from './AvailabilityCard.style';
import { CardProps } from './type';
import React from 'react';

const AvailabilityCard: React.FC<CardProps> = ({ children, color, ...rest }) => {
    return (
        <StyledCard color={color} {...rest}>
            {children}
        </StyledCard>
    );
};

export default AvailabilityCard;
