import { z } from "zod";

export const roleSchema = z.enum(["STUDENT", "TEACHER", "ADMIN"]);
export type Role = z.infer<typeof roleSchema>;

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(10)
});
