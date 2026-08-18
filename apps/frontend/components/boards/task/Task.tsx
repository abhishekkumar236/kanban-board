"use client";
import { ITask } from "@/app/(dashboard)/boards/[boardId]/page";
import { useDraggable } from "@dnd-kit/react";

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

export default Task;