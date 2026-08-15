import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-dvh flex flex-col">
            <Navbar />

            <main className="flex-1 min-h-0 pt-14 w-full">
                <div className="w-full max-w-5xl mx-auto p-2 h-full min-h-0">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Layout;
