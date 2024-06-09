import { DataSales } from './data/dataTypes';

export type SalesTableProps = {
    data: DataSales[];
    filter: (start: string, end: string) => void;
};

export type SalesChartProps = {
    type: 'line' | 'bar';
    data: DataSales[];
};

export type StatisticsProps = {
    number: string;
    title: string;
    background: string;
    textColor: string;
};

export type DataTableProps<DataSales> = {
    data: DataSales[];
};
