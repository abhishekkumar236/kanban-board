import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen grid grid-cols-2">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col items-start px-4 py-2 gap-2">
                    <h1 className="text-lg font-semibold">Boardio</h1>
                    <h2 className="font-semibold text-4xl mt-5">
                        Welcome to Boardio
                    </h2>
                    <div className="text-sm font-light">
                        From ideas to done.
                        <br />
                        Get things done, one card at a time.
                    </div>
                </div>
            </div>
            <div className="bg-foreground">{children}</div>
        </div>
    );
}

export default Layout;
