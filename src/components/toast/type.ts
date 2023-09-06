export interface CustomToastProps {
    status: 'success' | 'fail' | null;
    instantPopOut: () => void;
}

export interface ToastContextType {
    showToast: (message: string, type: 'success' | 'fail') => void;
}
