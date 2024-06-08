import { useEffect, useState } from 'react';
import { GET_DATA } from '../api/endpoints';
import { DataSales } from '@/types/data/dataTypes';

export const FetchingHook = () => {
    const [data, setData] = useState<DataSales[]>([]);

    useEffect(() => {
        GET_DATA().then((res) => setData(res.data.sort((a, b) => a.date.localeCompare(b.date))));
    }, []);

    const getTotalRevenue = (): number => {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].revenue;
        }
        return total;
    };

    const getTotalSales = (): number => {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].sales;
        }
        return total;
    };

    const getTopProduct = (): string => {
        const sortedData = data.sort((a, b) => {
            return a.sales - b.sales;
        })[0];

        if (sortedData) {
            return sortedData.product;
        } else {
            return 'Product A';
        }
    };

    return { data, getTopProduct, getTotalRevenue, getTotalSales, setData };
};
