import { ImageSourcePropType } from 'react-native';

export interface ListItemProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    screenName: string;
    color: string;
}

export interface ListItemPropsCardProps {
    data: ListItemProps[] | ListItemProps;
    onPress: (param: string) => void;
}
