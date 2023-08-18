import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import { RouteName } from './routeName';

export const navigationRef = createNavigationContainerRef();

const isReady = () => navigationRef.isReady();
const canGoBackScreen = () => navigationRef.isReady() && navigationRef.canGoBack();
const goBack = () => canGoBackScreen() && navigationRef.goBack();

const navigate = (routeName: string, params = {}) => {
    navigationRef.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        }),
    );
};

const navigateAndReset = (routes = [], index = 0) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes: routes.map((route) => ({ name: route })),
            }),
        );
    }
};

const navWithReset = (params = {}, navTo = RouteName.DASHBOARD) => {
    navigationRef.dispatch(
        CommonActions.reset({
            index: 0,
            key: navTo,
            routes: [
                {
                    name: navTo,
                    params,
                },
            ],
        }),
    );
};

export const RouteService = {
    navWithReset,
    navigateAndReset,
    navigate,
    isReady,
    canGoBackScreen,
    goBack,
};
