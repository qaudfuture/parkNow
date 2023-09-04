import { ProgressIndicator } from './RegisterProgressIndicator.style';
import React from 'react';
import { RegisterIndicatorProps } from './type';

const RegisterProgressIndicator: React.FC<RegisterIndicatorProps> = ({ isLastScreen, width }) => {
    return <ProgressIndicator isSecondScreen={isLastScreen} width={width} />;
};

export default RegisterProgressIndicator;
