import { useState } from 'react';
import { useSelector } from 'react-redux';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartsContainer = () => {
    const [isBarChart, setIsBarChart] = useState(false);
    const { monthlyApplications } = useSelector((state) => state.jobs);

    if (!monthlyApplications.length) {
        return null;
    }

    return (
        <section className='charts-container'>
            <h2>Monthly Applications</h2>
            <button className='text-link' onClick={() => setIsBarChart(!isBarChart)}>
                {isBarChart ? 'area chart' : 'bar chart'}
            </button>
            <div className='charts'>
                {isBarChart ? (
                    <BarChart data={monthlyApplications} />
                ) : (
                    <AreaChart data={monthlyApplications} />
                )}
            </div>
        </section>
    );
};

export default ChartsContainer;
