import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    name: string;
    email: string;
}

const initialState: UserProfile = {
    name: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            return action.payload;
        },
    },
});

export const { setUserProfile } = userSlice.actions;
export default userSlice.reducer;
