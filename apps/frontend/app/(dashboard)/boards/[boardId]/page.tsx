async function Board({ params }: { params: Promise<{ boardId: string }> }) {
    const { boardId } = await params;

    // add a button to add new column for the tasks on board with the name of the column
    const columns = [
        { id: "1", name: "To Do" },
        { id: "2", name: "In Progress" },
        { id: "3", name: "Done" },
    ];

    const tasks = [
        { id: "1", title: "Task 1", columnId: "1" },
        { id: "2", title: "Task 2", columnId: "1" },
        { id: "3", title: "Task 3", columnId: "2" },
        { id: "4", title: "Task 4", columnId: "3" },
    ];

    const columnTasks = (columnId: string) => {
        return tasks.filter((task) => task.columnId === columnId);
    };
    return (
        <div className="flex border w-full h-full">
            {columns.map((column) => (
                <div key={column.id} className="border flex flex-col w-64">
                    <div className="p-2 font-semibold">{column.name}</div>
                    <div className="flex-1 p-2">
                        {columnTasks(column.id).map((task) => (
                            <div
                                key={task.id}
                                className="p-2 mb-2 rounded shadow border"
                            >
                                {task.title}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Board;
