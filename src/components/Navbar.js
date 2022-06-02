import AuthBtn from './AuthBtn';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='section-center'>
                <Logo />
                <AuthBtn />
            </div>
        </nav>
    );
};

export default Navbar;
