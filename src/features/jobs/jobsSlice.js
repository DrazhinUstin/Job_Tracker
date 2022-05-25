import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { toast } from 'react-toastify';

const initialFilters = {
    search: '',
    status: 'all',
    statusOptions: ['all', 'interview', 'declined', 'pending'],
    type: 'all',
    typeOptions: ['all', 'full-time', 'part-time', 'remote', 'internship'],
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    page: 1,
    numOfPages: 1,
    filters: initialFilters,
    stats: {},
    monthlyApplications: [],
};

export const getJobs = createAsyncThunk('jobs/getJobs', async (_, thunkApi) => {
    try {
        const {
            page,
            filters: { search, status, type, sort },
        } = thunkApi.getState().jobs;
        const response = await axiosInstance.get(
            `/jobs?status=${status}&jobType=${type}&sort=${sort}&page=${page}${
                search ? `&search=${search}` : ''
            }`
        );
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
    reducers: {
        showLoading(state) {
            state.isLoading = true;
        },
        hideLoading(state) {
            state.isLoading = false;
        },
        updateFilters(state, { payload: { name, value } }) {
            state.filters[name] = value;
            state.page = 1;
        },
        restoreInitialFilters(state) {
            state.filters = initialFilters;
        },
        switchPage(state, { payload }) {
            state.page = payload;
        },
    },
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

export const { showLoading, hideLoading, updateFilters, restoreInitialFilters, switchPage } =
    jobsSlice.actions;
export default jobsSlice.reducer;
