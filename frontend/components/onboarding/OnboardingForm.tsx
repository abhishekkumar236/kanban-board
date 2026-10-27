"use client";

import {
    PiNumberCircleOneFill,
    PiNumberCircleOneLight,
    PiNumberCircleThreeFill,
    PiNumberCircleThreeLight,
    PiNumberCircleTwoFill,
    PiNumberCircleTwoLight,
} from "react-icons/pi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import WorkspaceForm, { WorkspaceHeader } from "./WorkspaceForm";
import EmailsForm, { EmailsHeader } from "./EmailsForm";
import ProjectForm, { ProjectHeader } from "./ProjectForm";
import { IoCheckmarkCircle } from "react-icons/io5";

function OnboardingForm() {
    const router = useRouter();
    const [step, useStep] = useState<number>(1);
    const onClickHandler = () => {
        if (step === 3) {
            router.push("/");
            return;
        }
        useStep(step + 1);
    };
    return (
        <div className="w-full h-full flex flex-col items-center pt-20">
            <div className="w-full max-w-md flex flex-col items-center gap-8">
                <div className="w-full max-w-md flex items-center gap-3">
                    {/* Workspace */}
                    {step > 1 ? (
                        <IoCheckmarkCircle className="text-xl text-blue-600" />
                    ) : step === 1 ? (
                        <PiNumberCircleOneFill className="text-xl text-blue-600" />
                    ) : (
                        <PiNumberCircleOneLight className="text-xl text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">Workspace</span>
                    <div className="flex-1 border-t border-gray-300" />
                    {/* Team */}
                    {step > 2 ? (
                        <IoCheckmarkCircle className="text-xl text-blue-600" />
                    ) : step === 2 ? (
                        <PiNumberCircleTwoFill className="text-xl text-blue-600" />
                    ) : (
                        <PiNumberCircleTwoLight className="text-xl text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">Team</span>
                    <div className="flex-1 border-t border-gray-300" />
                    {/* Members */}
                    {step === 3 ? (
                        <PiNumberCircleThreeFill className="text-xl text-blue-600" />
                    ) : (
                        <PiNumberCircleThreeLight className="text-xl text-gray-400" />
                    )}
                    <span className="text-sm text-gray-700">Members</span>
                </div>
                {step === 1 && <WorkspaceHeader />}
                {step === 2 && <ProjectHeader />}
                {step === 3 && <EmailsHeader />}
                <div className="w-full flex flex-col gap-4">
                    {step === 1 && (
                        <WorkspaceForm onClickHandler={onClickHandler} />
                    )}
                    {step === 2 && (
                        <ProjectForm onClickHandler={onClickHandler} />
                    )}
                    {step === 3 && (
                        <EmailsForm onClickHandler={onClickHandler} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default OnboardingForm;
