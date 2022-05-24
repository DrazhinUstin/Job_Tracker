import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import jobsReducer from './features/jobs/jobsSlice';
import singleJobReducer from './features/single_job/singleJobSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
        singleJob: singleJobReducer,
    },
});

export default store;
