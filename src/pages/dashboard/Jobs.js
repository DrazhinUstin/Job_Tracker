import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../features/jobs/jobsSlice';
import { Filters, JobsContainer, Pagination } from '../../components';

const Jobs = () => {
    const { isLoading, filters, page } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [filters, page]);

    return (
        <>
            <Filters />
            {isLoading ? (
                <h2>loading...</h2>
            ) : (
                <>
                    <JobsContainer />
                    <Pagination />
                </>
            )}
        </>
    );
};

export default Jobs;
