import { useEffect, useState } from 'react';
import { SecureUtils } from '../utils/secureStorage';

function useEncryptedStorage(key) {
    const [loggedInData, setLoggedInData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const encryptedData = await SecureUtils.get(key);
                if (encryptedData) {
                    // Decrypt the data if necessary
                    setLoggedInData(encryptedData);
                } else {
                    setLoggedInData(null);
                }
            } catch (error) {
                console.error(`Error fetching data from storage for key ${key}:`, error);
            }
        };

        fetchData();
    }, [key]);

    return loggedInData;
}

export default useEncryptedStorage;
