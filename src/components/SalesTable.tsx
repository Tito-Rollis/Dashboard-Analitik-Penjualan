import { flexRender } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Calendar } from 'lucide-react';

import { Button } from './ui/button';
import { Label } from '@radix-ui/react-label';
import { PopoverClose } from '@radix-ui/react-popover';
import { TableHook } from '@/hooks/table';
import { FormEvent } from 'react';
import { DataSales } from '@/types/data/dataTypes';

type SalesTableProps = {
    data: DataSales[];
    filter: (start: string, end: string) => void;
};

export const SalesTable = ({ data, filter }: SalesTableProps) => {
    const {
        columns,
        endDateHandle,
        startDateHandle,
        startDateInput,
        endDateInput,
        table,
        endDateInputRef,
        startDateInputRef,
    } = TableHook({
        data,
    });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        filter(startDateInput, endDateInput);
    };

    return (
        <div className="rounded-md border bg-slate-700">
            <div className="flex justify-between items-center p-4">
                <Input
                    placeholder="Filter products..."
                    value={(table.getColumn('product')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('product')?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-x-2">
                            <Calendar /> <h1 className="text-white">Filter</h1>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full bg-white">
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className="flex flex-col items-center justify-between gap-y-4">
                                <div className="flex flex-col items-center gap-x-2">
                                    <Label htmlFor="start_date">Start Date</Label>
                                    <Input
                                        ref={startDateInputRef}
                                        type="date"
                                        placeholder="Start Date"
                                        // value={(table.getColumn('product')?.getFilterValue() as string) ?? ''}
                                        onChange={() => startDateHandle()}
                                        className="max-w-sm"
                                    />
                                </div>
                                {/* <MoveDown className="text-indigo-500" /> */}
                                <div className="flex flex-col items-center gap-x-2">
                                    <Label htmlFor="end_date">End Date</Label>
                                    <Input
                                        type="date"
                                        placeholder="End Date"
                                        ref={endDateInputRef}
                                        // value={(table.getColumn('product')?.getFilterValue() as string) ?? ''}
                                        onChange={() => endDateHandle()}
                                        className="max-w-sm"
                                    />
                                </div>
                                <PopoverClose asChild>
                                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 gap-x-2 w-full">
                                        <h1>Submit</h1>
                                    </Button>
                                </PopoverClose>
                            </div>
                        </form>
                    </PopoverContent>
                </Popover>
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead className="text-white opacity-55" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell className="text-white" key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
