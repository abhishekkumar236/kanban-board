"use client";

import { createContext, useContext, useState } from "react";

export interface OnboardingData {
    workspaceName: string;
    teamName: string;
    projectName: string;
    projectDescription: string;
    emails: string[];
}

interface OnboardingContextType {
    onboardingData: OnboardingData;
    updateState: (data: Partial<OnboardingData>) => void;
}

export const OnboardingContext = createContext<OnboardingContextType | null>(
    null,
);

export function OnboardingContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [onboardingData, setOnboardingData] = useState<OnboardingData>({
        workspaceName: "",
        teamName: "",
        projectName: "",
        projectDescription: "",
        emails: [],
    });

    const updateState = (data: Partial<OnboardingData>) => {
        setOnboardingData((prev) => ({
            ...prev,
            ...data,
        }));
    };

    return (
        <OnboardingContext.Provider
            value={{
                onboardingData,
                updateState,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboardingContext() {
    const context = useContext(OnboardingContext);

    if (!context) {
        throw new Error(
            "Component must be wrapped with OnboardingContextProvider",
        );
    }

    const { onboardingData, updateState } = context;

    return {
        onboardingData,
        updateState,
    };
}
