import Navbar from "@/components/onboarding/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen relative">
            <Navbar />
        </div>
    );
}

export default layout;
