import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <section className='hero section-center'>
                <article className='hero-intro'>
                    <h1>Job Tracking App</h1>
                    <p>
                        Organize and follow your job applications. Never lose track of a position
                        you are interested in
                    </p>
                    <Link to='/dashboard' className='btn'>
                        get started
                    </Link>
                </article>
            </section>
        </>
    );
};

export default HomePage;
