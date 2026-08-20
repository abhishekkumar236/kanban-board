"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function LogOutButton() {
    const router = useRouter();
    const handleLogOut = () => {
        router.push("/auth/login");
    };
    return (
        <Button variant="secondary" size="sm" onClick={handleLogOut}>
            Log Out
        </Button>
    );
}
