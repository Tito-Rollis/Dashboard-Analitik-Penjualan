import { useEffect, useState } from 'react';
import { GET_DATA } from '../api/endpoints';
import { DataSales } from '@/types/data/dataTypes';

export const FetchingHook = () => {
    const [data, setData] = useState<DataSales[]>([]);

    useEffect(() => {
        GET_DATA().then((res) => setData(res.data));
    }, []);

    const getSalesRange = (start: string, end: string): DataSales[] => {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();

        const salesRange = data.filter((item) => {
            const itemFiltered = new Date(item.date).getTime();
            return itemFiltered >= startDate && itemFiltered <= endDate;
        });
        return salesRange;
    };

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

    return { data, getTopProduct, getTotalRevenue, getTotalSales, getSalesRange };
};
