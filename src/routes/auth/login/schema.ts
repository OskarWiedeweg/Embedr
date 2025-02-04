import { z } from "zod";

export const formSchema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(8)
});