import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormField } from '../../components/';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
    const { isLoading, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        location: user.location,
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, lastName, email, location } = formValues;
        if (!name || !lastName || !email || !location) {
            toast.error('please fill out all fields');
        } else {
            dispatch(updateUser({ name, lastName, email, location }));
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form-header'>Profile</h2>
            <FormField type='text' name='name' value={formValues.name} onChange={handleChange} />
            <FormField
                label='last name'
                type='text'
                name='lastName'
                value={formValues.lastName}
                onChange={handleChange}
            />
            <FormField type='email' name='email' value={formValues.email} onChange={handleChange} />
            <FormField
                type='text'
                name='location'
                value={formValues.location}
                onChange={handleChange}
            />
            <button type='submit' className='btn-block' disabled={isLoading}>
                {isLoading ? 'loading...' : 'save changes'}
            </button>
        </form>
    );
};

export default Profile;
