"use client";

import { useRouter } from "next/navigation";

import { columns, type Boards } from "./column";
import { DataTable } from "./data-table";

// The row handler has to be created on the client — a server component cannot
// pass a function across the boundary.
export function BoardsTable({ data }: { data: Boards[] }) {
    const router = useRouter();

    return (
        <DataTable
            columns={columns}
            data={data}
            onRowClick={(board) => router.push(`/boards/${board.id}`)}
        />
    );
}
