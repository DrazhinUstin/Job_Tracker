import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axiosInstance from '../../utils/axios';
import { getStorageItem } from '../../utils/storage';

const defaultJob = {
    position: '',
    company: '',
    jobLocation: getStorageItem('user')?.location || '',
    status: 'pending',
    statusOptions: ['pending', 'interview', 'declined'],
    jobType: 'full-time',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
};

const initialState = {
    isLoading: false,
    ...defaultJob,
};

export const addJob = createAsyncThunk('singleJob/addJob', async (job, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/jobs', job);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
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
            return { ...state, ...defaultJob };
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
    },
});

export const { updateJob, restoreDefaultJob } = singleJobSlice.actions;
export default singleJobSlice.reducer;
