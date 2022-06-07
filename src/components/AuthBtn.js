import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';
import { clearStore } from '../store';

const AuthBtn = () => {
    const [isBtnActive, setIsBtnActive] = useState(false);
    const { user } = useSelector((state) => state.user);

    if (!user) {
        return (
            <Link to='/login' className='btn'>
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
            <button className='btn' onClick={() => clearStore('you are logged out')}>
                log out
            </button>
        </div>
    );
};

export default AuthBtn;
