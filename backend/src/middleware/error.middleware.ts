import type { ErrorRequestHandler, Request, Response } from "express";
import { ZodError } from "zod";
import { logger } from "../config/logger.js";

export const notFoundHandler = (_request: Request, response: Response) => {
  response.status(404).json({ message: "Resource not found" });
};

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    return response.status(422).json({ message: "Validation failed", issues: error.issues });
  }

  logger.error(error);
  return response.status(500).json({ message: "Internal server error" });
};
