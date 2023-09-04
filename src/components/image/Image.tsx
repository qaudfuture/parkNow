import React from 'react';
import { ImageProps, ImageVariant } from './type';
import { ImageView } from './Image.style';

type GetStyleProps = Pick<ImageProps, 'variant'>;

const getStyle = ({ variant }: GetStyleProps) => {
    // const defaultStyle = {
    //     height: 20,
    //     width: 20,
    // };

    switch (variant) {
        case ImageVariant.ExtraSmall:
            return {
                height: 20,
                width: 20,
            };
            break;

        case ImageVariant.Small:
            return {
                height: 30,
                width: 30,
            };
            break;

        case ImageVariant.Medium:
            return {
                height: 50,
                width: 50,
            };
            break;
        case ImageVariant.Large:
            return {
                height: 115,
                width: 115,
            };
            break;
        case ImageVariant.ExtraLarge:
            return {
                height: '50%',
                width: '50%',
            };
            break;
        default:
            return {
                height: 30,
                width: 30,
            };
            break;
    }
};

const Image = (props: ImageProps) => {
    const { variant, resizemode, source } = props;
    const style = getStyle({ variant });

    return <ImageView resizeMode={resizemode} style={style} source={source} />;
};

export default Image;
