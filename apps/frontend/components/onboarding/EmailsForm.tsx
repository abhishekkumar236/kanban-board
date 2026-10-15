import React from "react";
import { FormComponent, InputElements } from "../auth/FormComponent";

const inputElements: InputElements[] = [
    {
        id: "email",
        name: "Emails",
        type: "text",
    },
];

export function EmailsHeader() {
    return (
        <div className="w-full flex flex-col gap-2">
            <span className="text-3xl font-semibold ">
                Invite your teammates
            </span>
            <span className="text-sm text-gray-600 ">
                They'll get an email with a link to join Acme.
            </span>
        </div>
    );
}

function EmailsForm({ onClickHandler }: { onClickHandler: () => void }) {
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

export default EmailsForm;
