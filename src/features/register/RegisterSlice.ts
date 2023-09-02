// import { SetLoginProps } from '../../hooks/useAuth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type RegistrationState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
    showToast: boolean;
};

const initialState: RegistrationState = {
    loading: false,
    error: undefined,
    data: undefined,
    showToast: false,
};
// action: PayloadAction<SetLoginProps>;
const registrationReducer = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        request(state: RegistrationState) {
            return { ...state, loading: true };
        },
        success(state: RegistrationState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload, showToast: true };
        },
        error(state: RegistrationState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload, showToast: true };
        },
        clear: () => initialState,
    },
});

export const { actions } = registrationReducer;
export default registrationReducer.reducer;
