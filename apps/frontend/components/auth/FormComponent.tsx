export interface InputElements {
    id: string;
    name: string;
    type: string;
}

export interface FormProps {
    inputElements: InputElements[];
    buttonText: string;
}
export function FormComponent({ inputElements, buttonText }: FormProps) {
    return (
        <>
            {inputElements.map((elem) => (
                <FormInput
                    key={elem.id}
                    name={elem.name}
                    id={elem.id}
                    type={elem.type}
                />
            ))}

            <button
                type="submit"
                className="bg-blue-700 text-white font-semibold text-sm py-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600"
            >
                {buttonText}
            </button>
        </>
    );
}

export function FormInput({ name, id, type }: InputElements) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-medium">
                {name}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-blue-600"
            />
        </div>
    );
}
