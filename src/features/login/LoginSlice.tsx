// import { SetLoginAuthProps } from '../../hooks/useAuth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type LoginState = {
    loading: boolean;
    data?: unknown;
    error?: unknown;
};

const initialState: LoginState = {
    loading: false,
    error: undefined,
    data: undefined,
};
// action: PayloadAction<SetLoginAuthProps>;
const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        request(state: LoginState) {
            return { ...state, loading: true };
        },
        success(state: LoginState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, data: action.payload };
        },
        error(state: LoginState, action: PayloadAction<unknown>) {
            return { ...state, loading: false, error: action.payload };
        },
        clear(state: LoginState) {
            return { ...state, loading: true };
        },
        clearState: () => initialState,
    },
});

export const { actions } = loginReducer;
export default loginReducer.reducer;
