import { useSelector, useDispatch } from 'react-redux';
import { switchPage } from '../features/jobs/jobsSlice';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Pagination = () => {
    const { page, numOfPages } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    const increasePage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) newPage = 1;
        dispatch(switchPage(newPage));
    };

    const decreasePage = () => {
        let newPage = page - 1;
        if (newPage < 1) newPage = numOfPages;
        dispatch(switchPage(newPage));
    };

    if (numOfPages <= 1) {
        return null;
    }
    return (
        <section className='pagination'>
            <button className='btn' onClick={decreasePage}>
                <FaAngleDoubleLeft />
                prev
            </button>
            {Array.from({ length: numOfPages }, (_, index) => index + 1).map((item) => {
                return (
                    <button
                        key={item}
                        className={item === page ? 'active' : ''}
                        onClick={() => dispatch(switchPage(item))}
                    >
                        {item}
                    </button>
                );
            })}
            <button className='btn' onClick={increasePage}>
                next
                <FaAngleDoubleRight />
            </button>
        </section>
    );
};

export default Pagination;
