import type { ITask } from "@/components/boards/types";
import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/react";

function Task({ task }: { task: ITask }) {
    const { ref, isDragging } = useDraggable({
        id: task.id,
    });
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm",
                isDragging ? "cursor-grabbing opacity-50" : "cursor-grab",
            )}
        >
            <h3 className="font-medium">{task.title}</h3>

            <p className="mt-1 text-sm text-muted-foreground">
                {task.description}
            </p>
        </div>
    );
}

export default Task;