import { Logo, AuthBtn } from './';

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
