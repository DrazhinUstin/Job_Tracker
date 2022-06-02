import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='count' fill='#746fd4' maxBarSize={100} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
