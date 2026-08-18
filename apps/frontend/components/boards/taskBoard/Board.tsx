"use client";

import {
    IColumns,
    ITasks,
    Status,
} from "@/app/(dashboard)/boards/[boardId]/page";
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";
import Column from "../column/Column";

function TaskBoard({
    initialTasks,
    columns,
    boardId,
}: {
    initialTasks: ITasks;
    columns: IColumns;
    boardId: string;
}) {
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

export default TaskBoard;
