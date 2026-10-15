import React from "react";
import { FormComponent, InputElements } from "../auth/FormComponent";

const inputElements: InputElements[] = [
    {
        id: "projectName",
        name: "Project name",
        type: "text",
    },
    {
        id: "projectDescription",
        name: "Project Description",
        type: "text",
    },
];

export function ProjectHeader() {
    return (
        <div className="w-full flex flex-col gap-2">
            <span className="text-3xl font-semibold ">
                Create your first team
            </span>
            <span className="text-sm text-gray-600 ">
                Teams group people and their issues. You can add more later.
            </span>
        </div>
    );
}

function ProjectForm({ onClickHandler }: { onClickHandler: () => void }) {
    return (
        <>
            <FormComponent
                inputElements={inputElements}
                buttonText={"Continue"}
                onClickHandler={onClickHandler}
            />
        </>
    );
}

export default ProjectForm;
