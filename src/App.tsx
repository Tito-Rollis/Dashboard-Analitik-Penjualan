import { SalesChart } from './components/SalesChart';
import { Statistics } from './components/Statistics';
import { SalesTable } from './components/SalesTable';
import { FetchingHook } from './hooks/fetching';
import { useEffect, useState } from 'react';
import { DataSales } from './types/data/dataTypes';

function App() {
    const { getTopProduct, getTotalRevenue, getTotalSales, data } = FetchingHook();
    const [getData, setGetData] = useState<DataSales[]>([]);

    const getSalesRange = (start: string, end: string): void => {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();

        const salesRange = data.filter((item) => {
            const itemFiltered = new Date(item.date).getTime();
            return itemFiltered >= startDate && itemFiltered <= endDate;
        });
        setGetData(salesRange);
    };

    useEffect(() => {
        setGetData(data);
    }, [data]);

    return (
        <div className="flex flex-col gap-y-8 p-6 ">
            <div className=" flex items-center justify-center gap-x-4 ">
                <Statistics
                    textColor="text-green-700"
                    background="bg-green-300"
                    number={getTotalSales().toString()}
                    title="Sales"
                />
                <Statistics
                    textColor="text-blue-700"
                    background="bg-blue-300"
                    number={getTotalRevenue().toString()}
                    title="Revenue"
                />
                <Statistics
                    textColor="text-yellow-700"
                    background="bg-yellow-300"
                    number={getTopProduct()}
                    title="Top Product"
                />
            </div>

            {/* CHARTS */}
            <div className="flex gap-x-4 justify-between w-full h-48 mx-auto">
                <SalesChart data={getData} type="line" />
            </div>

            {/* TABLE */}
            <SalesTable filter={getSalesRange} data={getData} />
        </div>
    );
}

export default App;
