import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Outlet />
        </>
    );
};

export default DashboardPage;
