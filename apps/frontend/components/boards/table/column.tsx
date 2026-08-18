"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { type DataTableFeatures } from "./data-table-features";

export interface Boards {
    id: string;
    title: string;
    description: string;
    startedAt: number;
    creator: string;
}

// Pinned locale + timeZone so the server and the browser format identically.
// A bare toLocaleDateString() uses Node's ICU default on the server and the
// user's OS locale in the browser, which causes a hydration mismatch.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
});

const columnHelper = createColumnHelper<DataTableFeatures, Boards>();

export const columns = columnHelper.columns([
    columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
        header: "Description",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("startedAt", {
        header: "Started At",
        cell: (info) => dateFormatter.format(new Date(info.getValue())),
    }),
    columnHelper.accessor("creator", {
        header: "Creator",
        cell: (info) => info.getValue(),
    }),
]);
