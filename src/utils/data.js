import {
    FaChartLine,
    FaBriefcase,
    FaBriefcaseMedical,
    FaAddressCard,
    FaBusinessTime,
    FaCalendarCheck,
    FaCalendarTimes,
} from 'react-icons/fa';

const navLinksData = [
    {
        id: 1,
        title: 'stats',
        icon: <FaChartLine />,
        path: '',
    },
    {
        id: 2,
        title: 'jobs',
        icon: <FaBriefcase />,
        path: 'jobs',
    },
    {
        id: 3,
        title: 'add job',
        icon: <FaBriefcaseMedical />,
        path: 'add_job',
    },
    {
        id: 4,
        title: 'profile',
        icon: <FaAddressCard />,
        path: 'profile',
    },
];

const statsData = [
    {
        id: '1',
        icon: <FaBusinessTime />,
        title: 'pending',
        description: 'pending applications',
    },
    {
        id: '2',
        icon: <FaCalendarCheck />,
        title: 'interview',
        description: 'interviews scheduled',
    },
    {
        id: '3',
        icon: <FaCalendarTimes />,
        title: 'declined',
        description: 'jobs declined',
    },
];

export { navLinksData, statsData };
