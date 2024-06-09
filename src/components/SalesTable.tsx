import { flexRender } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from './ui/button';
import { Label } from '@radix-ui/react-label';
import { PopoverClose } from '@radix-ui/react-popover';
import { TableHook } from '@/hooks/table';
import { FormEvent } from 'react';
import { SalesTableProps } from '@/types/props';

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
                {/* Search Bar */}
                <Input
                    placeholder="Filter products..."
                    value={(table.getColumn('product')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('product')?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />

                {/* Modal */}
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

            {/* Table */}
            <div className="overflow-auto rounded-sm shadow-inner">
                <Table className="text-nowrap">
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
                                <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination Button */}
            <div className="flex justify-end gap-x-2 w-full h-fit px-4 pb-4">
                <Button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="bg-white mt-4 hover:bg-slate-300  py-1"
                >
                    <ChevronLeft className="text-slate-700" />
                    <h1 className="text-slate-700">Prev</h1>
                </Button>
                <Button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="bg-white mt-4 hover:bg-slate-300  py-1"
                >
                    <ChevronRight className="text-slate-700" />
                    <h1 className="text-slate-700">Next</h1>
                </Button>
            </div>
        </div>
    );
};
