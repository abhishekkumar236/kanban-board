// Shared board types. Both the route and the components import *down* into this
// file, so no component ever has to reach up into a route to learn its types.

export type Status = "inProgress" | "pending" | "completed";

export interface ITask {
    id: string;
    title: string;
    description: string;
    status: Status;
}

export type ITasks = ITask[];

export interface IColumn {
    id: string;
    title: Status;
}

export type IColumns = IColumn[];
