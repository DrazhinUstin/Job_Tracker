import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { formatDate } from '../utils/helpers';
import { prepareJobEditing, deleteJob } from '../features/single_job/singleJobSlice';

const JobsContainer = () => {
    const { jobs, totalJobs } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();
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
                            <div>
                                <div className='jobs-item-content'>
                                    <p>
                                        <FaLocationArrow />
                                        {jobLocation}
                                    </p>
                                    <p>
                                        <FaCalendarAlt />
                                        {formatDate(createdAt)}
                                    </p>
                                    <p>
                                        <FaBriefcase />
                                        {jobType}
                                    </p>
                                    <p className={status}>{status}</p>
                                </div>
                                <footer className='btn-container'>
                                    <Link
                                        to='/dashboard/add_job'
                                        className='btn yellow'
                                        onClick={() =>
                                            dispatch(
                                                prepareJobEditing({
                                                    jobId: _id,
                                                    company,
                                                    position,
                                                    status,
                                                    jobType,
                                                    jobLocation,
                                                })
                                            )
                                        }
                                    >
                                        edit
                                    </Link>
                                    <button
                                        className='btn red'
                                        onClick={() => dispatch(deleteJob(_id))}
                                    >
                                        delete
                                    </button>
                                </footer>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default JobsContainer;
