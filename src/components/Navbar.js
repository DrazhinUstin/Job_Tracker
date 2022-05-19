import AuthBtn from './AuthBtn';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='section-center'>
                <h2>job tracker</h2>
                <AuthBtn />
            </div>
        </nav>
    );
};

export default Navbar;
