import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    HomePage,
    DashboardPage,
    Stats,
    Jobs,
    AddJob,
    Profile,
    AuthPage,
    ErrorPage,
} from './pages';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route
                    path='dashboard'
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Stats />} />
                    <Route path='jobs' element={<Jobs />} />
                    <Route path='add_job' element={<AddJob />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='login' element={<AuthPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <ToastContainer
                position='top-center'
                theme='dark'
                style={{ textTransform: 'capitalize' }}
            />
        </Router>
    );
};

export default App;
