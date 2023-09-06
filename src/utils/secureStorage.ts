import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-community/async-storage';

export enum SecureStorageKey {
    ACCESS_TOKEN = 'access-token',
    USER_DATA = 'user_data',
}

const set = async (key: SecureStorageKey, value: unknown) => {
    try {
        await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

const get = async (key: SecureStorageKey) => {
    const session = (await EncryptedStorage.getItem(key)) || '';

    if (session !== undefined) return session as string;
};

const remove = async (key: SecureStorageKey) => {
    try {
        await EncryptedStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};

const clearStorage = async () => {
    try {
        await EncryptedStorage.clear();
    } catch (error) {
        console.log(error);
    }
};

const removeItemFromStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error(`Error removing item with key`, error);
    }
};

export const SecureUtils = {
    set,
    get,
    remove,
    clearStorage,
    removeItemFromStorage,
};
