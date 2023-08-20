import { ProgressIndicator } from './RegisterProgressIndicator.style';
import React from 'react';
import { RegisterIndicatorProps } from './type';

const RegisterProgressIndicator: React.FC<RegisterIndicatorProps> = ({ isLastScreen }) => {
    return <ProgressIndicator isSecondScreen={isLastScreen} />;
};

export default RegisterProgressIndicator;
