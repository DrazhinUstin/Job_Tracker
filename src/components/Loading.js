import { ReactComponent as LoadingSVG } from '../assets/loading.svg';

const Loading = ({ container, className = 'page-100 grid-center' }) => {
    if (container) {
        return (
            <div className={className}>
                <LoadingSVG />
            </div>
        );
    }
    return <LoadingSVG />;
};

export default Loading;
