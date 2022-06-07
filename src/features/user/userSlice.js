import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { handleAxiosError } from '../../utils/axios';
import { getStorageItem, setStorageItem, removeStorageItem } from '../../utils/storage';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    user: getStorageItem('user'),
};

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    try {
        const response = await axios.post(`/auth/${user.name ? 'register' : 'login'}`, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
    try {
        const response = await axios.patch('/auth/updateUser', user);
        return response.data.user;
    } catch (error) {
        return handleAxiosError(error, thunkAPI);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser(state, { payload }) {
            state.user = null;
            removeStorageItem('user');
            if (payload) toast.success(payload);
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
