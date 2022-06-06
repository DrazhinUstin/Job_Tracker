import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
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
                        <div className='btn-container'>
                            <Link to='/dashboard' className='btn'>
                                get started
                            </Link>
                            <a
                                href='https://github.com/DrazhinUstin/Job_Tracker'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-flex black'
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        </div>
                    </article>
                    <img src={heroImage} alt='hero' />
                </div>
            </section>
        </>
    );
};

export default HomePage;
