import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../../features/jobs/jobsSlice';
import { statsData as data } from '../../utils/data';

const Stats = () => {
    const { isLoading, stats } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStats());
    }, []);

    if (isLoading) {
        return <h2>loading</h2>;
    }

    return (
        <section className='stats'>
            {data.map(({ id, icon, title, description }) => {
                return (
                    <article key={id} className='stats-item'>
                        <header>
                            <h2>{stats[title] || 0}</h2>
                            {icon}
                        </header>
                        <h4>{description}</h4>
                    </article>
                );
            })}
        </section>
    );
};

export default Stats;
