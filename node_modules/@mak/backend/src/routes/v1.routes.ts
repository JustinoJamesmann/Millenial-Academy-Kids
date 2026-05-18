import { Router } from "express";
import { assignmentsRouter } from "../modules/assignments/assignments.routes.js";
import { healthRouter } from "../modules/health/health.routes.js";
import { lessonsRouter } from "../modules/lessons/lessons.routes.js";

export const v1Router = Router();

v1Router.use("/health", healthRouter);
v1Router.use("/lessons", lessonsRouter);
v1Router.use("/assignments", assignmentsRouter);
