import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { ReactComponent as DarkLogoSvg } from '../assets/logo_dark.svg';

const Logo = ({ dark, style = null, className = null }) => {
    return (
        <Link to='/'>
            {dark ? (
                <DarkLogoSvg style={style} className={className} />
            ) : (
                <LogoSvg style={style} className={className} />
            )}
        </Link>
    );
};

export default Logo;
