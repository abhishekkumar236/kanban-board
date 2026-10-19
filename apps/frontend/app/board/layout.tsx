import Sidebar from "@/components/board/Sidebar";
import React from "react";
import { Logo } from "../auth/layout";
import { IoSearch } from "react-icons/io5";

function layout({ children }: { children: React.ReactNode }) {
    const isTyping = false;
    return (
        <div className="w-full h-screen flex">
            <div className="w-64 shrink-0 bg-gray-100 border-r border-r-gray-300 py-4 px-4 flex flex-col gap-4">
                <Sidebar />
            </div>
            <div className="flex-2/3"></div>
        </div>
    );
}

export default layout;
