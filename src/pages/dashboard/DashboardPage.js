import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { Sidebar, AuthBtn } from '../../components';

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <main className='dashboard'>
            <Sidebar {...{ isSidebarOpen, setIsSidebarOpen }} />
            <div>
                <header className='dashboard-header'>
                    <div className='section-center'>
                        <button
                            className={isSidebarOpen ? 'active' : null}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <FaAlignJustify />
                        </button>
                        <h2>dashboard</h2>
                        <AuthBtn />
                    </div>
                </header>
                <Outlet />
            </div>
        </main>
    );
};

export default DashboardPage;
