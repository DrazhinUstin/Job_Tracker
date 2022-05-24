import { useSelector } from 'react-redux';
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { formatDate } from '../utils/helpers';

const JobsContainer = () => {
    const { jobs, totalJobs } = useSelector((state) => state.jobs);

    return (
        <section className='jobs-container'>
            <h4>
                {totalJobs} Job{totalJobs !== 1 && 's'} Found
            </h4>
            <div className='jobs'>
                {jobs.map(({ _id, company, position, status, jobType, jobLocation, createdAt }) => {
                    return (
                        <article key={_id} className='jobs-item'>
                            <header className='jobs-item-header'>
                                <div>{position.charAt(0)}</div>
                                <div>
                                    <h4>{position}</h4>
                                    <p>{company}</p>
                                </div>
                            </header>
                            <div className='jobs-item-content'>
                                <div>
                                    <FaLocationArrow />
                                    {jobLocation}
                                </div>
                                <div>
                                    <FaCalendarAlt />
                                    {formatDate(createdAt)}
                                </div>
                                <div>
                                    <FaBriefcase />
                                    {jobType}
                                </div>
                                <div>{status}</div>
                            </div>
                            <footer className='jobs-item-footer'>
                                <button className='btn'>edit</button>
                                <button className='btn'>delete</button>
                            </footer>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default JobsContainer;
