import { SalesChart } from './components/SalesChart';
import { Statistics } from './components/Statistics';
import { SalesTable } from './components/SalesTable';
import { FetchingHook } from './hooks/fetching';
import { TableHook } from './hooks/table';

function App() {
    const { data, getTopProduct, getTotalRevenue, getTotalSales } = FetchingHook();
    const { Columns } = TableHook();

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
                <SalesChart data={data} type="line" />
            </div>

            {/* TABLE */}
            <SalesTable columns={Columns} data={data} />
        </div>
    );
}

export default App;
