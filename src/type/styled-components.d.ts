import { Color, FontType } from './types';
declare module 'styled-components/native' {
    export interface DefaultTheme {
        fonts: FontType;
        colors: Color;
    }
}
