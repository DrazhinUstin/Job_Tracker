import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobs } from '../../features/jobs/jobsSlice';
import { JobsContainer } from '../../components';

const Jobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, []);

    return <JobsContainer />;
};

export default Jobs;
