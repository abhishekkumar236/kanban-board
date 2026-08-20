"use client";

import { loginSchema, loginSchemaType } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmitHandler = (data: loginSchemaType) => console.log(data);
    return (
        <div className="flex flex-col gap-4 justify-center items-center rounded-md border border-foreground/30 p-4 text-background w-[60%]">
            <h1 className="text-left font-bold text-lg w-full">Boardio</h1>
            <h2 className="font-bold text-3xl w-full text-left">Log in</h2>
            <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="rounded-md p-2 bg-white shadow-md/10 outline-none"
                        {...register("email")}
                    />
                    {errors.email?.message && (
                        <p className="text-sm text-destructive">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-semibold text-lg">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="rounded-md p-2 bg-white shadow-md/10 outline-none"
                        {...register("password")}
                    />
                    {errors.password?.message && (
                        <p className="text-sm text-destructive">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                <button
                    className="w-full rounded-md bg-primary p-2 font-semibold text-lg text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/50"
                    type="submit"
                >
                    Log In
                </button>
            </form>
            <div className="text-sm">
                Don't have an account?{" "}
                <button className="text-primary cursor-pointer">Sign Up</button>
            </div>
        </div>
    );
}

export default LoginForm;
