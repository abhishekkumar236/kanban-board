"use client";

import { signupSchema, signupSchemaType } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signupSchemaType>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const onSubmitHandler = (data: signupSchemaType) => console.log(data);
    return (
        <div className="flex flex-col gap-6 justify-center items-center border border-neutral-500 p-4 rounded-md w-[45%] md:w-[50%] :w-[70%] shadow-xl/40 shadow-red-800">
            <span className="font-semibold text-2xl w-full text-center">
                Create new account
            </span>
            <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="font-semibold text-lg">
                        Username
                    </label>
                    <input
                        type="username"
                        id="username"
                        className="border border-neutral-500 rounded-md outline-none p-2"
                        {...register("username")}
                    />
                    {errors.username?.message && (
                        <p className="text-red-500">
                            {errors.username?.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border border-neutral-500 rounded-md outline-none p-2"
                        {...register("email")}
                    />
                    {errors.email?.message && (
                        <p className="text-red-500">{errors.email?.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-semibold text-lg">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border border-neutral-500 rounded-md outline-none p-2"
                        {...register("password")}
                    />
                    {errors.password?.message && (
                        <p className="text-red-500">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                <button
                    className="w-full bg-red-800 p-2 rounded-md font-semibold text-lg"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
