import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../../features/jobs/jobsSlice';
import { StatsContainer, ChartsContainer } from '../../components';

const Stats = () => {
    const { isLoading } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStats());
    }, []);

    if (isLoading) {
        return <h2>loading</h2>;
    }

    return (
        <>
            <StatsContainer />
            <ChartsContainer />
        </>
    );
};

export default Stats;
