"use client";
import React from "react";
import ThemeProvider from "./ThemeProvider";

function Provider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}

export default Provider;
