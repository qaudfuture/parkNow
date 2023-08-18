import { ImageSourcePropType } from 'react-native';
import { Images } from '../../resources/images';

export type OnBoardingProps = { id: number; source: ImageSourcePropType; description: string; heading: string };
export const constantItems: OnBoardingProps[] = [
    {
        id: 1,
        source: Images.onBoard,
        description: 'You can feel best experience when you drive',
        heading: 'Car Parking',
    },
    {
        id: 2,
        source: Images.carMove,
        description: 'You can feel best experience when you drive',
        heading: 'Car Parking',
    },
];
