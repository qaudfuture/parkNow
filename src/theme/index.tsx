import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';
import { ThemeType } from '../type/enum';
import { Theme } from '../type/types';

export const getSelectedTheme = (themeType: ThemeType): Theme => {
    if (themeType === ThemeType.DARKTHEME) return DarkTheme;
    return LightTheme;
};
