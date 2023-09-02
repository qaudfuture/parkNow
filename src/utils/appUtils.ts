import NetInfo from '@react-native-community/netinfo';

import { setGlobalHeader } from '../network/axios';

/**
 * function which sets the global bearer token
 * @param token stiring
 */
const setBearerToken = (token: string) => {
    setGlobalHeader(token);
};

/**
 * fucntion to check the internet connect
 * @returns boolean
 */
const isConnectedToInternet = async () => {
    const response = await NetInfo.fetch();
    return !!response.isConnected;
};

export const AppUtils = {
    setBearerToken,
    isConnectedToInternet,
};
