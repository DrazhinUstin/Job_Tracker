import { Link } from 'react-router-dom';
import errorImage from '../assets/page_not_found.svg';

const ErrorPage = () => {
    return (
        <main className='min-100 grid-center'>
            <section className='page-not-found'>
                <img src={errorImage} alt='page not found' />
                <div>
                    <h1>page not found...</h1>
                    <p>We can't seem to find the page you're looking for</p>
                    <Link to='/' className='btn'>
                        back home
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
