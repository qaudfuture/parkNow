import styled from 'styled-components/native';
import { Animated } from 'react-native';
export const Container = styled(Animated.View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`;

export const ToastView = styled.View<{ backgroundColor: string }>`
    height: 60px;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    }
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const Row = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const CustomText = styled.Text<{ color: string }>`
    font-weight: bold;
    font-size: 15px;
    color: ${(props) => props.color};
`;

export const SubText = styled.Text<{ color: string }>`
    font-size: 12px;
    color: ${(props) => props.color};
`;
