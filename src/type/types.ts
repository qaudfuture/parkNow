//
export type Color = {
    primary: string;
    secondary: string;
    background: string;
    ternary: string;
    text: string;
    white: string;
    gray: string;
    lightgray: string;
    black: string;
    error: string;
    disabled: string;
    placeholder: string;
    primaryGradient: string[];
};

export enum FontWeight {
    NORMAL = 'normal',
    BOLD = 'bold',
    W100 = '100',
    W200 = '200',
    W300 = '300',
    W400 = '400',
    W500 = '500',
    W600 = '600',
    W700 = '700',
    W800 = '800',
    W900 = '900',
}

export enum FontSize {}

export type FontVariantType = {
    fontFamily: string;
    fontWeight: FontWeight;
};

type FontVariant = 'light' | 'regular' | 'thin' | 'medium' | 'bold';

export type FontVariants = {
    [variant in FontVariant]: variant;
};

export type FontType = Record<FontVariant, FontVariantType>;

export type Theme = {
    fonts: FontType;
    colors: Color;
};

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
