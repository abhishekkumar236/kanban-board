import React from "react";
import { FormComponent, InputElements } from "../auth/FormComponent";

const inputElements: InputElements[] = [
    {
        id: "workspace",
        name: "Workspace name",
        type: "text",
    },
    {
        id: "teamName",
        name: "Team Name",
        type: "text",
    },
];

export function WorkspaceHeader() {
    return (
        <div className="w-full flex flex-col gap-2">
            <span className="text-3xl font-semibold ">
                Create your workspace
            </span>
            <span className="text-sm text-gray-600 ">
                A workspace holds your teams, projects and issues. Most
                companies only need one.
            </span>
        </div>
    );
}

function WorkspaceForm({ onClickHandler }: { onClickHandler: () => void }) {
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

export default WorkspaceForm;
