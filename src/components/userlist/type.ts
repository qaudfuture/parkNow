import { ImageSourcePropType } from 'react-native';

export interface UserListCardItem {
    id: number;
    image: ImageSourcePropType;
    name: string;
}

export interface UserListListCardProps {
    data: UserListCardItem[] | UserListCardItem;
    onPress: (item: UserListCardItem) => void;
    isSelected?: boolean;
}
