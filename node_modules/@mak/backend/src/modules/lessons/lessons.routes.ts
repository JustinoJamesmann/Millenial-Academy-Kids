import { Router } from "express";
import { requireAuthenticatedUser } from "../../middleware/auth.middleware.js";

export const lessonsRouter = Router();

lessonsRouter.get("/", requireAuthenticatedUser, (_request, response) => {
  response.json({ data: [], message: "Lesson module foundation ready" });
});
