"use client";

import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { features, type DataTableFeatures } from "./data-table-features";
import { Button } from "../../ui/button";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[];
    data: TData[];
    /** When provided, rows become clickable and focusable. */
    onRowClick?: (row: TData) => void;
}

// Clicks landing on something interactive inside a cell belong to that control,
// not to the row.
const INTERACTIVE =
    "a, button, input, select, textarea, label, [role=checkbox]";

export function DataTable<TData extends RowData>({
    columns,
    data,
    onRowClick,
}: DataTableProps<TData>) {
    const table = useTable({
        features,
        data,
        columns,
    });

    return (
        // Fills whatever height the parent gives it: the table area flexes and
        // scrolls, the pagination bar stays pinned at the bottom.
        <div className="flex h-full min-h-0 flex-col">
            <div className="min-h-0 flex-1 overflow-hidden rounded-md border border-border bg-card [&>[data-slot=table-container]]:h-full">
                <Table>
                    <TableHeader className="sticky top-0 z-10 bg-card">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <table.FlexRender
                                                    header={header}
                                                />
                                            )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                    className={
                                        onRowClick
                                            ? "cursor-pointer"
                                            : undefined
                                    }
                                    tabIndex={onRowClick ? 0 : undefined}
                                    onClick={
                                        onRowClick &&
                                        ((event) => {
                                            const target =
                                                event.target as HTMLElement;
                                            if (target.closest(INTERACTIVE))
                                                return;
                                            onRowClick(row.original);
                                        })
                                    }
                                    onKeyDown={
                                        onRowClick &&
                                        ((event) => {
                                            if (event.key !== "Enter") return;
                                            if (
                                                event.target !==
                                                event.currentTarget
                                            )
                                                return;
                                            onRowClick(row.original);
                                        })
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="py-3.5"
                                        >
                                            <table.FlexRender cell={cell} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex shrink-0 items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
