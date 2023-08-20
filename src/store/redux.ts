import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/register/RegisterSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
