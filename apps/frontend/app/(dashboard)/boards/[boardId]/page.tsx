import TaskBoard from "@/components/boards/taskBoard/Board";

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

async function Board({ params }: { params: { boardId: string } }) {
    const { boardId } = await params;
    return (
        <TaskBoard
            initialTasks={initialTasks}
            boardId={boardId}
            columns={columns}
        />
    );
}

export default Board;
