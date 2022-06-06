import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../../features/jobs/jobsSlice';
import { Loading, StatsContainer, ChartsContainer } from '../../components';

const Stats = () => {
    const { isLoading } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStats()); // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <Loading container />;
    }

    return (
        <div className='section section-center'>
            <StatsContainer />
            <ChartsContainer />
        </div>
    );
};

export default Stats;
