"use client";
import { Logo } from "@/app/auth/layout";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function Sidebar() {
    const [projectMenuOpen, setProjectMenuOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const projectMenuOnClick = () => {
        console.log("click");
        setProjectMenuOpen((prev) => !prev);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const profileOnClickHandler = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <>
            <Logo />
            <div className="flex items-center w-full border border-gray-300 bg-white rounded-xl text-md px-2">
                {searchQuery ? (
                    " "
                ) : (
                    <IoSearch className="text-xl text-gray-400" />
                )}
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="w-full outline-none py-1 text-gray-600 pl-2"
                    onChange={handleChange}
                />
            </div>
            {/* Sidebar parent element */}
            <div className="flex flex-col items-start w-full h-full justify-between">
                {/* Search bar */}
                <button
                    className="flex justify-between w-full cursor-pointer hover:bg-gray-200 p-2 items-center rounded-xl"
                    onClick={projectMenuOnClick}
                >
                    <span className="font-semibold text-sm text-gray-500">
                        Projects
                    </span>
                    {projectMenuOpen ? (
                        <IoIosArrowDown className="text-gray-500" />
                    ) : (
                        <IoIosArrowUp className="text-gray-500" />
                    )}
                </button>

                {/* Sidebar Items */}
                {projectMenuOpen && (
                    <div className="ml-5 border-l border-gray-300 pl-4 flex flex-col gap-3">
                        {["Project 1", "Project 2", "Project 3"].map(
                            (project) => (
                                <div key={project} className="relative">
                                    <div className="absolute top-1/2 -left-4 w-4 border-t border-gray-300" />
                                    <span className="text-gray-600 text-sm ml-1 cursor-pointer hover:text-black hover:font-semibold">
                                        {project}
                                    </span>
                                </div>
                            ),
                        )}
                    </div>
                )}

                {/* Profile footer + dropdown wrapper */}
                <div className="relative w-full mt-auto">
                    {/* Profile button */}
                    <button
                        className="w-full border-t border-gray-200 p-3 cursor-pointer hover:bg-gray-100 rounded-lg"
                        onClick={profileOnClickHandler}
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                                E
                            </div>

                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-gray-800">
                                    Ethan Hunt
                                </span>
                                <span className="text-xs text-gray-500">
                                    ethan@example.com
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* Dropdown menu */}
                    {openMenu && (
                        <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50">
                            <button className="w-full text-left text-sm p-2 rounded-lg hover:bg-gray-100">
                                Profile
                            </button>

                            <button className="w-full text-left text-sm p-2 rounded-lg hover:bg-gray-100">
                                Settings
                            </button>

                            <div className="border-t border-gray-200 my-1" />

                            <button className="w-full text-left text-sm text-red-600 p-2 rounded-lg hover:bg-red-100">
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
