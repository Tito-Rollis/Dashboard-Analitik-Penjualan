import { ChartHook } from '@/hooks/chart';
import { SalesChartProps } from '@/types/props';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export const SalesChart = ({ type, data }: SalesChartProps) => {
    const { CustomTooltip } = ChartHook();

    return (
        <>
            {type === 'line' ? (
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            ) : (
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />

                    <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
            )}
        </>
    );
};
