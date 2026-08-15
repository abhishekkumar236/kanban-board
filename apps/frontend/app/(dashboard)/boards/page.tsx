import Boards from "@/components/boards/Boards";
import React from "react";

function BoardsPage() {
    return (
        <div className="flex h-full min-h-0 flex-col gap-4">
            <h1 className="shrink-0 font-semibold text-3xl">Boards</h1>
            <Boards />
        </div>
    );
}

export default BoardsPage;
