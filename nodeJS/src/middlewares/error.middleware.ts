// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  
  if (err.response) {
    // Error del MS-A (Spring Boot)
    return res.status(err.response.status).json({
      status: err.response.status,
      message: err.response.data?.message || "Error from MS-A",
      timestamp: new Date().toISOString()
    });
  }

  // Error interno del BFF
  return res.status(500).json({
    status: 500,
    message: "Internal BFF error",
    timestamp: new Date().toISOString()
  });
};