import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/user/userSlice';
import { FormField } from '../components';

const AuthPage = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isLoginForm, setIsLoginForm] = useState(true);
    const { isLoading, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formValues;
        if (!email || !password || (!isLoginForm && !name)) {
            console.log('please fill out all fields');
            return;
        }
        if (isLoginForm) {
            dispatch(loginUser({ email, password }));
        } else {
            dispatch(loginUser({ name, email, password }));
        }
    };

    return (
        <section className='min-100 grid-center'>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h2 className='form-header'>{isLoginForm ? 'log in' : 'sign up'}</h2>
                {!isLoginForm && (
                    <FormField
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                )}
                <FormField
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                />
                <FormField
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}
                />
                <button type='submit' className='btn-block' disabled={isLoading}>
                    submit
                </button>
                <p>
                    {isLoginForm ? "Don't have an account? " : 'Already have an account? '}
                    <button
                        type='button'
                        className='text-link'
                        onClick={() => setIsLoginForm(!isLoginForm)}
                    >
                        {isLoginForm ? 'sign up' : 'log in'}
                    </button>
                </p>
            </form>
        </section>
    );
};

export default AuthPage;
