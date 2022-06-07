import { configureStore } from '@reduxjs/toolkit';
import userReducer, { logoutUser } from './features/user/userSlice';
import jobsReducer, { resetJobs } from './features/jobs/jobsSlice';
import singleJobReducer, { restoreDefaultJob } from './features/single_job/singleJobSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
        singleJob: singleJobReducer,
    },
});

const clearStore = (msg) => {
    store.dispatch(logoutUser(msg));
    store.dispatch(resetJobs());
    store.dispatch(restoreDefaultJob());
};

export { store as default, clearStore };
