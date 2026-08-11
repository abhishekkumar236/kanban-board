"use client";

import { useRouter } from "next/navigation";

export function LogOutButton() {
    const router = useRouter();
    const handleLogOut = () => {
        router.push("/auth/login");
    };
    return (
        <button
            onClick={handleLogOut}
            className="px-4 py-1 bg-neutral-400 rounded-md text-neutral-800 cursor-pointer"
        >
            Log Out
        </button>
    );
}
