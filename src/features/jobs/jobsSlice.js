import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    stats: {},
    monthlyApplications: [],
};

export const getJobs = createAsyncThunk('jobs/getJobs', async (_, thunkApi) => {
    try {
        const response = await axiosInstance.get('/jobs');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
    }
});

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
        [getJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getJobs.fulfilled]: (state, { payload: { jobs, numOfPages, totalJobs } }) => {
            return { ...state, isLoading: false, jobs, numOfPages, totalJobs };
        },
        [getJobs.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export default jobsSlice.reducer;
