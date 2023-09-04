import styled from 'styled-components/native';

export const DashboardTopCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardTopTextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const DashboardTopInnerLeftCard = styled.View``;

export const DashboardTopInnerRightCard = styled.View`
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ImageContainer = styled.View`
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background-color: ${({ color }) => color || 'white'};
`;

export const ImageView = styled.Image`
    height: 20px;
    width: 20px;
`;

export const Container = styled.View`
    flex: 1;
`;

export const TopContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;
export const BottomContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Image = styled.Image`
    height: 100px;
    width: 100px;
`;
