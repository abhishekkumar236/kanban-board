"use client";

import { IColumn, ITasks } from "@/app/(dashboard)/boards/[boardId]/page";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/react";
import Task from "../task/Task";

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
            <div className="flex min-h-24 flex-1 flex-col gap-3 cursor-grab">
                {columnTasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
}

export default Column;
