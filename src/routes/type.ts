import { RouteName } from './routeName';
// import { StoryDetailsParams } from '@TopStories/Screen/StoryDetail/type';
// import { StoyListPrams } from '@TopStories/Screen/StoryList';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Dashboard Stack
export type DashboardStackParamList = {
    [RouteName.DASHBOARD]: undefined;
    [RouteName.PAYMENT_DETAILS]: undefined;
    [RouteName.ADD_PAYMENT]: undefined;
    [RouteName.PAYMENT_SUCCESS]: undefined;
    [RouteName.SETTLE_PAYMENT]: undefined;
    [RouteName.BOOK_CARD]: undefined;
    [RouteName.PROFILE_DETAILS]: undefined;
    [RouteName.BOOK_CARDAVAILABLE_SLOTS]: undefined;

    // [RouteName.STORY_LIST]: StoyListPrams;
    // [RouteName.STORY_DETAIL]: StoryDetailsParams;
    // [RouteName.STORY_SEARCH]: undefined;
};

//Auth Stack
export type AuthStackParamList = {
    [RouteName.LOGIN]: undefined;
    [RouteName.REGISTER]: undefined;
    [RouteName.REGISTERUPLOAD]: undefined;
};

//OnBoard Stack
export type OnBoardStackParamList = {
    [RouteName.ONBOARDING]: undefined;
};

// Screen Props
export type DashbaordStackScreenProp<T extends keyof DashboardStackParamList> = NativeStackScreenProps<
    DashboardStackParamList,
    T
>;

type RootStackParamList = OnBoardStackParamList & AuthStackParamList;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
export type ScreenNavigationProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>;

export type ScreenProps<T extends keyof RootStackParamList> = {
    route: ScreenRouteProp<T>;
    navigation: CompositeNavigationProp<ScreenNavigationProp<T>>;
};
