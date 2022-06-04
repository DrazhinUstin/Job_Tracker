import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormField } from '../../components';
import {
    updateJob,
    addJob,
    editJob,
    restoreDefaultJob,
} from '../../features/single_job/singleJobSlice';

const AddJob = () => {
    const {
        isLoading,
        isEditing,
        jobId,
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
            return;
        }
        if (isEditing) {
            dispatch(editJob({ jobId, job: { position, company, jobLocation, status, jobType } }));
        } else {
            dispatch(addJob({ position, company, jobLocation, status, jobType }));
        }
    };

    return (
        <form className='form section section-center' onSubmit={handleSubmit}>
            <h2 className='form-header'>{isEditing ? 'edit job' : 'add job'}</h2>
            <div className='form-grid'>
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
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn-block red'
                        onClick={() => dispatch(restoreDefaultJob())}
                    >
                        clear
                    </button>
                    <button type='submit' className='btn-block' disabled={isLoading}>
                        {isLoading ? 'loading...' : 'submit'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddJob;
