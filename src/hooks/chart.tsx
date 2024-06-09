import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export const ChartHook = () => {
    const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-slate-700 p-4 border rounded-md">
                    <h1 className="text-white  text-sm opacity-55">{label}</h1>
                    <p className="text-white font-medium">{`${payload[0].payload.product}`}</p>
                    <p className="text-white ">
                        <span className="opacity-55">Revenue: </span> {payload[0].payload.revenue}
                    </p>
                </div>
            );
        }

        return null;
    };
    return { CustomTooltip };
};
