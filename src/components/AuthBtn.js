import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';
import { logoutUser } from '../features/user/userSlice';

const AuthBtn = () => {
    const [isBtnActive, setIsBtnActive] = useState(false);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    if (!user) {
        return (
            <Link to='/signup' className='btn'>
                log in / sign up
            </Link>
        );
    }
    return (
        <div className='auth-btn-container'>
            <button
                className={`auth-btn ${isBtnActive && 'active'}`}
                onClick={() => setIsBtnActive(!isBtnActive)}
            >
                <FaUserCircle />
                {user.name}
                <FaAngleDown />
            </button>
            <button className='btn' onClick={() => dispatch(logoutUser())}>
                log out
            </button>
        </div>
    );
};

export default AuthBtn;
