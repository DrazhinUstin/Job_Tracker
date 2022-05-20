import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { getStorageItem, setStorageItem, removeStorageItem } from '../../utils/storage';
import { toast } from 'react-toastify';

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

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
    try {
        const { token } = thunkAPI.getState().user.user;
        const response = await axiosInstance.patch('/auth/updateUser', user, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.user;
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
            toast.success('you are logged out');
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
            toast.success(`welcome, ${user.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            setStorageItem('user', payload);
            toast.success('user updated');
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
