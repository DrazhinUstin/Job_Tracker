import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    stats: {},
    monthlyApplications: [],
};

export const getStats = createAsyncThunk('jobs/getStats', async (_, thunkApi) => {
    try {
        const response = await axiosInstance.get('/jobs/stats');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
    }
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    extraReducers: {
        [getStats.pending]: (state) => {
            state.isLoading = true;
        },
        [getStats.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
        },
        [getStats.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export default jobsSlice.reducer;
