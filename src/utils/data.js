import { FaBusinessTime, FaCalendarCheck, FaCalendarTimes } from 'react-icons/fa';

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

export { statsData };
