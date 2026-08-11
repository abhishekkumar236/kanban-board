import React from "react";

async function Board({ params }: { params: Promise<{ boardId: string }> }) {
    const { boardId } = await params;
    return <div>Board {boardId}</div>;
}

export default Board;
