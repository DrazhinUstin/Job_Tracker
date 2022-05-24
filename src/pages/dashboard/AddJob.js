import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormField } from '../../components';
import { updateJob, addJob, restoreDefaultJob } from '../../features/single_job/singleJobSlice';

const AddJob = () => {
    const {
        isLoading,
        position,
        company,
        jobLocation,
        status,
        statusOptions,
        jobType,
        jobTypeOptions,
    } = useSelector((state) => state.singleJob);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateJob({ name, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!position || !company || !jobLocation) {
            toast.error('please fill out all fields');
        } else {
            dispatch(addJob({ position, company, jobLocation, status, jobType }));
            dispatch(restoreDefaultJob());
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form-header'>add job</h2>
            <FormField type='text' name='position' value={position} onChange={handleChange} />
            <FormField type='text' name='company' value={company} onChange={handleChange} />
            <FormField
                label='location'
                type='text'
                name='jobLocation'
                value={jobLocation}
                onChange={handleChange}
            />
            <FormField
                name='status'
                value={status}
                onChange={handleChange}
                options={statusOptions}
            />
            <FormField
                label='type'
                name='jobType'
                value={jobType}
                onChange={handleChange}
                options={jobTypeOptions}
            />
            <div>
                <button type='button' className='btn' onClick={() => dispatch(restoreDefaultJob())}>
                    clear
                </button>
                <button type='submit' className='btn' disabled={isLoading}>
                    {isLoading ? 'loading...' : 'submit'}
                </button>
            </div>
        </form>
    );
};

export default AddJob;
