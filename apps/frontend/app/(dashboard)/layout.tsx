import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-14">
                <div className="w-full max-w-5xl mx-auto p-2">{children}</div>
            </main>
        </div>
    );
}

export default Layout;
