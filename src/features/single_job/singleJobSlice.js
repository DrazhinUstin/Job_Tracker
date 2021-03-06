import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios, { handleAxiosError } from '../../utils/axios';
import { showLoading, getJobs, hideLoading } from '../jobs/jobsSlice';

const defaultJob = {
    jobId: null,
    position: '',
    company: '',
    jobLocation: '',
    status: 'pending',
    statusOptions: ['pending', 'interview', 'declined'],
    jobType: 'full-time',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
};

const initialState = {
    isLoading: false,
    isEditing: false,
    ...defaultJob,
};

export const addJob = createAsyncThunk('singleJob/addJob', async (job, thunkAPI) => {
    try {
        const response = await axios.post('/jobs', job);
        thunkAPI.dispatch(restoreDefaultJob());
        return response.data;
    } catch (error) {
        return handleAxiosError(error, thunkAPI);
    }
});

export const editJob = createAsyncThunk('singleJob/editJob', async ({ jobId, job }, thunkAPI) => {
    try {
        const response = await axios.patch(`/jobs/${jobId}`, job);
        thunkAPI.dispatch(restoreDefaultJob());
        return response.data;
    } catch (error) {
        return handleAxiosError(error, thunkAPI);
    }
});

export const deleteJob = createAsyncThunk('singleJob/deleteJob', async (jobId, thunkAPI) => {
    try {
        thunkAPI.dispatch(showLoading());
        const response = await axios.delete(`/jobs/${jobId}`);
        thunkAPI.dispatch(getJobs());
        return response.data.msg;
    } catch (error) {
        thunkAPI.dispatch(hideLoading());
        return handleAxiosError(error, thunkAPI);
    }
});

const singleJobSlice = createSlice({
    name: 'singleJob',
    initialState,
    reducers: {
        updateJob(state, { payload: { name, value } }) {
            state[name] = value;
        },
        restoreDefaultJob(state) {
            return { ...state, isEditing: false, ...defaultJob };
        },
        prepareJobEditing(state, { payload }) {
            return { ...state, isEditing: true, ...payload };
        },
    },
    extraReducers: {
        [addJob.pending]: (state) => {
            state.isLoading = true;
        },
        [addJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('job added');
        },
        [addJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('job edited');
        },
        [editJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [deleteJob.fulfilled]: (_, { payload }) => {
            toast.success(payload);
        },
        [deleteJob.rejected]: (_, { payload }) => {
            toast.error(payload);
        },
    },
});

export const { updateJob, restoreDefaultJob, prepareJobEditing } = singleJobSlice.actions;
export default singleJobSlice.reducer;
