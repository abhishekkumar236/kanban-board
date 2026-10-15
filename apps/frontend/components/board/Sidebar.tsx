import { Logo } from "@/app/auth/layout";
import React from "react";
import { IoSearch } from "react-icons/io5";

function Sidebar() {
    const isTyping = false;
    return (
        <>
            <Logo />
            <div className="flex items-center w-full border border-gray-300 bg-white rounded-xl text-md px-2">
                {isTyping ? (
                    " "
                ) : (
                    <IoSearch className="text-2xl text-gray-400" />
                )}
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="w-full outline-none py-1 text-gray-600 pl-2"
                />
            </div>
        </>
    );
}

export default Sidebar;
