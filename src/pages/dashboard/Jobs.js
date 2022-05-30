import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../features/jobs/jobsSlice';
import { Filters, JobsContainer, Pagination, Loading } from '../../components';

const Jobs = () => {
    const { isLoading, filters, page } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [filters, page]);

    return (
        <div className='section section-center'>
            <Filters />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <JobsContainer />
                    <Pagination />
                </>
            )}
        </div>
    );
};

export default Jobs;
