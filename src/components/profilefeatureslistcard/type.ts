import { ImageSourcePropType } from 'react-native';

export interface ProfileFeatureCardItem {
    image: ImageSourcePropType;
    color?: string;
    title: string;
    screenName: string;
}

export interface ProfileFeatureListCardProps {
    data: ProfileFeatureCardItem[] | ProfileFeatureCardItem;
    onPress: (param: string) => void;
}
