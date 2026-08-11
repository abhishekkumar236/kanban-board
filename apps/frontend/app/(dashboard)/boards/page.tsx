import Boards from "@/components/boards/Boards";
import React from "react";

function BoardsPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-3xl">Boards</h1>
            <Boards />
        </div>
    );
}

export default BoardsPage;
