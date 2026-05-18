import type { NextFunction, Request, Response } from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";

export const clerkAuthMiddleware = clerkMiddleware();
export const requireAuthenticatedUser = requireAuth();

type AuthenticatedRequest = Request & {
  auth?: { sessionClaims?: { metadata?: { role?: string } } };
};

export function requireRole(allowedRoles: Array<"STUDENT" | "TEACHER" | "ADMIN">) {
  return (request: AuthenticatedRequest, response: Response, next: NextFunction) => {
    const role = request.auth?.sessionClaims?.metadata?.role;
    if (!role || !allowedRoles.includes(role as "STUDENT" | "TEACHER" | "ADMIN")) {
      return response.status(403).json({ message: "Insufficient permissions" });
    }
    return next();
  };
}
