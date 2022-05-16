import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, DashboardPage, AuthPage, ErrorPage } from './pages';
import PrivateRoute from './PrivateRoute';

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
                />
                <Route path='signup' element={<AuthPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
