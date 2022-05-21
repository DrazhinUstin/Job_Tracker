import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import jobsReducer from './features/jobs/jobsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
    },
});

export default store;
