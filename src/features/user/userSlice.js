import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { getStorageItem, setStorageItem, removeStorageItem } from '../../utils/storage';

const initialState = {
    isLoading: false,
    user: getStorageItem('user'),
};

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    try {
        const response = await axiosInstance.post(
            `/auth/${user.name ? 'register' : 'login'}`,
            user
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser(state) {
            state.user = null;
            removeStorageItem('user');
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload: { user } }) => {
            state.isLoading = false;
            state.user = user;
            setStorageItem('user', user);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            console.log(payload);
        },
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
