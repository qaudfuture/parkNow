import React from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
import { RouteName } from './routeName';

export type NavigationRefType = React.MutableRefObject<NavigationContainerRef<typeof RouteName>>;

let _navigator: NavigationRefType;

const setTopLevelNavigator = (navigatorRef: NavigationRefType) => {
    _navigator = navigatorRef;
};

const navigate = (routeName: string, params = {}) => {
    _navigator?.current.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        }),
    );
};

const goToTopOfStack = () => {
    _navigator?.current.dispatch(StackActions.popToTop());
};

const popToTopThenNavigate = (route: string, params = {}) => {
    if (_navigator?.current.canGoBack()) {
        _navigator?.current.dispatch(StackActions.popToTop());
    }
    if (route) navigate(route, params);
};

const popToTopThenPopAndNavigate = (route: string, params = {}) => {
    if (_navigator?.current.canGoBack()) {
        _navigator?.current.dispatch(StackActions.popToTop());
        _navigator?.current.dispatch(StackActions.pop());
    }
    if (route) navigate(route, params);
};

const goBackToPreviousRoute = () => {
    _navigator?.current.dispatch(StackActions.pop());
};

export const NavigationService = {
    setTopLevelNavigator,
    navigate,
    goToTopOfStack,
    popToTopThenNavigate,
    popToTopThenPopAndNavigate,
    goBackToPreviousRoute,
};
