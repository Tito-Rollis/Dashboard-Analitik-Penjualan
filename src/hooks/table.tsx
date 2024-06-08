import { DataSales } from '@/types/data/dataTypes';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useRef, useState } from 'react';

export interface DataTableProps<TData> {
    data: TData[];
}

export const TableHook = ({ data }: DataTableProps<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const [startDateInput, setStartDateInput] = useState<string>('');
    const [endDateInput, setEndDateInput] = useState<string>('');

    const startDateInputRef = useRef<HTMLInputElement | null>(null);
    const endDateInputRef = useRef<HTMLInputElement | null>(null);

    const startDateHandle = () => {
        if (startDateInputRef.current) {
            setStartDateInput(startDateInputRef.current.value);
        }
    };
    const endDateHandle = () => {
        if (endDateInputRef.current) {
            setEndDateInput(endDateInputRef.current.value);
        }
    };

    // const submitHandler = (e: HTMLFormElement) => {
    //     e.preventDefault();
    //     console.log(startDateInput, endDateInput);
    // };

    const columns: ColumnDef<DataSales>[] = [
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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });
    return {
        columns,
        startDateHandle,
        endDateHandle,
        startDateInput,
        endDateInput,
        table,
        startDateInputRef,
        endDateInputRef,
    };
};
