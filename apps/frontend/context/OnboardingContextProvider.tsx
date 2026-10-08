"use client";
import { createContext, useContext, useState } from "react";

export interface OnboardingData {
    workspaceName: string;
    teamName: string;
    teamKey: string;
    boardName: string;
    boardDescription: string;
    emails: string[];
}

interface OnboardingContextType {
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
    resetData: () => void;
}

const initialData: OnboardingData = {
    workspaceName: "",
    teamName: "",
    teamKey: "",
    boardName: "",
    boardDescription: "",
    emails: [],
};

export const OnboardingContext = createContext<OnboardingContextType | null>(
    null,
);

export function OnboardingContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [data, setData] = useState<OnboardingData>(initialData);

    function updateData(newData: Partial<OnboardingData>) {
        setData((prev) => ({
            ...prev,
            ...newData,
        }));
    }

    function resetData() {
        setData(initialData);
    }

    return (
        <OnboardingContext.Provider
            value={{
                data,
                updateData,
                resetData,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);

    if (!context) {
        throw new Error(
            "useOnboarding must be used inside OnboardingContextProvider",
        );
    }

    return context;
}
