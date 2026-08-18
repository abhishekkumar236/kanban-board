"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useDraggable, useDroppable, DragDropProvider } from "@dnd-kit/react";
import { cn } from "@/lib/utils";

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

// create 10 tasks with different status
const initialTasks: ITasks = [
    {
        id: "1",
        title: "Task 1",
        description: "Description 1",
        status: "inProgress",
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description 2",
        status: "pending",
    },
    {
        id: "3",
        title: "Task 3",
        description: "Description 3",
        status: "completed",
    },
    {
        id: "4",
        title: "Task 4",
        description: "Description 4",
        status: "inProgress",
    },
    {
        id: "5",
        title: "Task 5",
        description: "Description 5",
        status: "completed",
    },
    {
        id: "6",
        title: "Task 6",
        description: "Description 6",
        status: "pending",
    },
    {
        id: "7",
        title: "Task 7",
        description: "Description 7",
        status: "inProgress",
    },
    {
        id: "8",
        title: "Task 8",
        description: "Description 8",
        status: "completed",
    },
    {
        id: "9",
        title: "Task 9",
        description: "Description 9",
        status: "pending",
    },
    {
        id: "10",
        title: "Task 10",
        description: "Description 10",
        status: "inProgress",
    },
];

const columns: IColumns = [
    { id: "1", title: "inProgress" },
    { id: "2", title: "pending" },
    { id: "3", title: "completed" },
];

function Board() {
    const { boardId } = useParams<{ boardId: string }>();
    const [tasks, setTasks] = useState<ITasks>(initialTasks);
    return (
        <DragDropProvider
            onDragEnd={(event) => {
                // The drag was aborted (Escape, or the pointer never moved).
                if (event.canceled) return;

                const { source, target } = event.operation;
                // Dropped outside of any column — nothing to do.
                if (!source || !target) return;

                const status = target.data?.status as Status | undefined;
                if (!status) return;

                // dnd-kit does not move anything on its own: the card only
                // lands in a new column because this state change re-renders it
                // there.
                setTasks((current) =>
                    current.map((task) =>
                        task.id === source.id ? { ...task, status } : task,
                    ),
                );
            }}
        >
            <div className="flex h-full w-full flex-col gap-6 p-6">
                <h1 className="text-2xl font-semibold">{boardId}</h1>

                <div className="grid flex-1 grid-cols-3 gap-4">
                    {columns.map((column) => {
                        const columnTasks = tasks.filter(
                            (task) => task.status === column.title,
                        );

                        return (
                            <Column
                                column={column}
                                columnTasks={columnTasks}
                                key={column.id}
                            />
                        );
                    })}
                </div>
            </div>
        </DragDropProvider>
    );
}

function Task({ task }: { task: ITask }) {
    const { ref } = useDraggable({
        id: task.id,
    });
    return (
        <div
            className="rounded-lg border bg-background p-4 shadow-sm"
            ref={ref}
        >
            <h3 className="font-medium">{task.title}</h3>

            <p className="mt-1 text-sm text-muted-foreground">
                {task.description}
            </p>
        </div>
    );
}

function Column({
    column,
    columnTasks,
}: {
    column: IColumn;
    columnTasks: ITasks;
}) {
    const { ref, isDropTarget } = useDroppable({
        // `data` travels with the droppable and comes back in onDragEnd, so the
        // handler never has to look the column up by id.
        id: column.id,
        data: { status: column.title },
    });
    return (
        <div
            ref={ref}
            className={cn(
                "flex flex-col rounded-lg bg-muted/50 p-4 transition-colors",
                isDropTarget && "bg-muted ring-2 ring-primary",
            )}
        >
            {/* Column header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold">{column.title}</h2>

                <span className="rounded-md bg-background px-2 py-1 text-sm text-muted-foreground">
                    {columnTasks.length}
                </span>
            </div>

            {/* Tasks */}
            <div className="flex min-h-24 flex-1 flex-col gap-3">
                {columnTasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
}

export default Board;
