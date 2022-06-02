import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { Logo } from './';
import { navLinksData as navLinks } from '../utils/data';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const handleClick = () => {
        const windowWidth = document.documentElement.clientWidth;
        if (windowWidth <= 768) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <aside className={`sidebar ${isSidebarOpen && 'open'}`}>
            <button className='sidebar-close-btn' onClick={() => setIsSidebarOpen(false)}>
                <FaTimes />
            </button>
            <header className='sidebar-header'>
                <Logo dark />
            </header>
            <nav className='sidebar-menu'>
                {navLinks.map(({ id, title, icon, path }) => {
                    return (
                        <NavLink
                            key={id}
                            to={path}
                            className={({ isActive }) => (isActive ? 'active' : null)}
                            end
                            onClick={handleClick}
                        >
                            {icon}
                            {title}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;
