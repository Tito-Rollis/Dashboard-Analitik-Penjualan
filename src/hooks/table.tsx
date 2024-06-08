import { DataSales } from '@/types/data/dataTypes';
import { ColumnDef } from '@tanstack/react-table';

export const TableHook = () => {
    const Columns: ColumnDef<DataSales>[] = [
        {
            accessorKey: 'product',
            header: 'Product',
        },
        {
            accessorKey: 'date',
            header: 'Tanggal',
        },
        {
            accessorKey: 'sales',
            header: 'Jumlah Penjualan',
        },
        {
            accessorKey: 'revenue',
            header: 'Pendapatan',
        },
    ];

    return { Columns };
};
