import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero.svg';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <section className='hero section-center'>
                <div>
                    <article>
                        <h1>Job Tracking App</h1>
                        <p>
                            Organize and follow your job applications. Never lose track of a
                            position you are interested in
                        </p>
                        <Link to='/dashboard' className='btn'>
                            get started
                        </Link>
                    </article>
                    <img src={heroImage} alt='hero' />
                </div>
            </section>
        </>
    );
};

export default HomePage;
