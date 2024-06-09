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
        const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        });
        setGetData(sortedData);
    }, [data]);

    return (
        <div className="flex flex-col gap-y-8 p-6 w-screen">
            <div className=" flex flex-col md:flex-row  items-center justify-center gap-4 ">
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
            <div className="flex flex-wrap gap-x-4   gap-y-1 md:justify-center w-full h-fit mx-auto">
                <SalesChart data={getData} type="line" />
                <SalesChart data={getData} type="bar" />
            </div>

            {/* TABLE */}
            <SalesTable filter={getSalesRange} data={getData} />
        </div>
    );
}

export default App;
