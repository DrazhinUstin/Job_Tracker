import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser(state) {
            console.log(state);
        },
    },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
