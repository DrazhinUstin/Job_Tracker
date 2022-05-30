import { useSelector, useDispatch } from 'react-redux';
import { FormField } from '../components';
import { updateFilters, restoreInitialFilters } from '../features/jobs/jobsSlice';

const Filters = () => {
    const { isLoading, filters } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (isLoading) return;
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateFilters({ name, value }));
    };

    return (
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <h2 className='form-header'>filters</h2>
            <div className='form-grid'>
                <FormField
                    type='text'
                    name='search'
                    value={filters.search}
                    onChange={handleChange}
                />
                <FormField
                    name='status'
                    value={filters.status}
                    onChange={handleChange}
                    options={filters.statusOptions}
                />
                <FormField
                    name='type'
                    value={filters.type}
                    onChange={handleChange}
                    options={filters.typeOptions}
                />
                <FormField
                    name='sort'
                    value={filters.sort}
                    onChange={handleChange}
                    options={filters.sortOptions}
                />
                <button
                    type='button'
                    className='btn'
                    disabled={isLoading}
                    onClick={() => dispatch(restoreInitialFilters())}
                >
                    clear filters
                </button>
            </div>
        </form>
    );
};

export default Filters;
