import { DataSales } from '@/types/data/dataTypes';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type SalesChartProps = {
    type: 'line' | 'bar';
    data: DataSales[];
};

export const SalesChart = (props: SalesChartProps) => {
    // interface ConvertData {
    //     date: string;
    //     revenueA: number;
    //     revenueB: number;
    // }

    // type AggregatedData = {
    //     date: string;
    //     revenueA: number;
    //     revenueB: number;
    // };

    // const [convertData, setConvertData] = useState<ConvertData[]>([]);
    // useEffect(() => {
    //     const aggregatedData: { [key: string]: AggregatedData } = data.reduce((acc, item) => {
    //         // Jika belum ada entry untuk tanggal ini, inisialisasi dengan revenue 0
    //         if (!acc[item.date]) {
    //             acc[item.date] = { date: item.date, revenueA: 0, revenueB: 0 };
    //         }

    //         // Tambahkan revenue berdasarkan produk
    //         if (item.product === 'Product A') {
    //             acc[item.date].revenueA += item.revenue;
    //         } else if (item.product === 'Product B') {
    //             acc[item.date].revenueB += item.revenue;
    //         }

    //         setConvertData(acc);
    //     }, {});
    // }, []);
    // console.log(convertData);
    // const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    //     console.log(payload);
    //     if (active && payload && payload.length) {
    //         return (
    //             <div className="custom-tooltip">
    //                 {/* {payload.map((e) => {
    //                     return <p className="label">{`${label} : ${e.payload.product}`}</p>;
    //                 })} */}
    //                 <p className="label">{`${label} : ${payload[0].payload.product}`}</p>
    //                 <p className="label">{`${label} : ${payload[1].payload.product}`}</p>
    //             </div>
    //         );
    //     }

    //     return null;
    // };

    return (
        <ResponsiveContainer width="100%" height="80%">
            <LineChart data={props.data}>
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>

            {/* {props.type === 'line' ? (
                <LineChart data={data}>
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            ) : (
                <BarChart data={convertData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        payload={[
                            { value: 'Product A', type: 'square', color: '#8884D8' },
                            { value: 'Product B', type: 'square', color: '#82CA9D' },
                        ]}
                    />
                    <Bar name="revenueA" dataKey="revenueA" fill="#8884d8" />
                    <Bar name="revenueB" dataKey="revenueB" fill="#82CA9D" />
                </BarChart>
            )} */}
        </ResponsiveContainer>
    );
};
