import { Router } from "express";
import { requireAuthenticatedUser } from "../../middleware/auth.middleware.js";

export const assignmentsRouter = Router();

assignmentsRouter.get("/", requireAuthenticatedUser, (_request, response) => {
  response.json({ data: [], message: "Assignment module foundation ready" });
});
