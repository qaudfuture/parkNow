import { ImageSourcePropType } from 'react-native';

export enum ImageVariant {
    ExtraSmall = 'extrasmall',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    ExtraLarge = 'extraLarge',
}

export interface ImageProps {
    variant: ImageVariant;
    resizemode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center' | undefined;
    source: ImageSourcePropType;
}

export interface ImageViewProps {
    resizemode: 'repeat' | 'contain' | 'cover' | 'stretch' | 'center' | undefined;
}
