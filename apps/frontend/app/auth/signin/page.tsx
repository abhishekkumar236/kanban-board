import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { FormComponent, InputElements } from "@/components/auth/FormComponent";

const inputElements: InputElements[] = [
    {
        id: "email",
        name: "Email",
        type: "email",
    },
    {
        id: "password",
        name: "Password",
        type: "password",
    },
];

function Signup() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-1 w-80">
                <span className="text-2xl font-semibold">Welcome Back</span>

                <span className="text-gray-500 text-sm">
                    Log in to your Kanban workspace.
                </span>

                <button className="border border-gray-400 rounded-md flex items-center gap-2 justify-center p-2 mt-6 cursor-pointer hover:bg-gray-100">
                    <FaGoogle className="text-blue-700" />
                    <span className="text-md font-semibold">
                        Continue with Google
                    </span>
                </button>

                <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 border-t border-gray-300" />
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex-1 border-t border-gray-300" />
                </div>

                <div className="flex flex-col gap-3">
                    <FormComponent
                        inputElements={inputElements}
                        buttonText="Log In"
                    />
                </div>

                <span className="text-gray-500 text-xs mt-2 text-center">
                    New to Linear-lite?{" "}
                    <Link href="/auth/signup" className="text-blue-700">
                        Create an account
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Signup;
