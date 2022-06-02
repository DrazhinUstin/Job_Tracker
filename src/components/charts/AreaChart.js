import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey='count' stroke='#746fd4' fill='#746fd4' />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
