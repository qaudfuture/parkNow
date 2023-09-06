import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View } from 'react-native';
import CustomToast from './CustomToast'; // Import your custom toast component
import { ToastContextType } from './type';
// Define the context for the toast

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// ToastProvider component
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'fail' } | null>(null);

    // Function to show a toast
    const showToast = (message: string, type: 'success' | 'fail') => {
        setToast({ message, type });
    };

    // Function to hide the toast
    const hideToast = () => {
        setToast(null);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            <View style={{ flex: 1 }}>
                {children}
                {toast && <CustomToast message={toast.message} type={toast.type} instantPopOut={hideToast} />}
            </View>
        </ToastContext.Provider>
    );
};

// Hook to access the toast context
export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
