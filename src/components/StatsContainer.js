import { useSelector } from 'react-redux';
import { statsData as data } from '../utils/data';

const StatsContainer = () => {
    const { stats } = useSelector((state) => state.jobs);
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

export default StatsContainer;
