import { SalesChart } from './components/SalesChart';
import { Statistics } from './components/Statistics';

function App() {
    return (
        <div className="flex flex-col gap-y-8 p-6 ">
            <div className=" flex items-center justify-center gap-x-4 ">
                <Statistics textColor="text-green-700" background="bg-green-300" number="500000" title="Sales" />
                <Statistics textColor="text-blue-700" background="bg-blue-300" number="300" title="Revenue" />
                <Statistics
                    textColor="text-yellow-700"
                    background="bg-yellow-300"
                    number="Product A"
                    title="Top Product"
                />
            </div>

            {/* CHARTS */}
            <div className="flex gap-x-4 justify-between w-full h-48 mx-auto">
                <SalesChart type="line" />
            </div>
        </div>
    );
}

export default App;
