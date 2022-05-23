import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../features/jobs/jobsSlice';
import { JobsContainer, Pagination } from '../../components';

const Jobs = () => {
    const { page } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [page]);

    return (
        <>
            <JobsContainer />
            <Pagination />
        </>
    );
};

export default Jobs;
