import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(4, "Username is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
});

export type signupSchemaType = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
