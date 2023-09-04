import styled from 'styled-components/native';
import { ImageViewProps } from './type';

export const ImageView = styled.Image<ImageViewProps>`
    resize-mode: ${({ resizemode }) => (resizemode ? resizemode : 'contain')};
`;
