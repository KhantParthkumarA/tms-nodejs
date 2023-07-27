import { Request, Response, NextFunction } from 'express';

// Define the type for the error object
interface ErrorResponse extends Error {
  status: number;
  errorList?: string[]; // Optional property for badRequestHandler
}

// Error handler for 400 bad request
export const badRequestHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  if (err.status === 400) {
    res.status(400).json({ message: err.message, errorList: err.errorList });
  } else {
    next(err);
  }
};

// Error handler for 401 unauthorized
export const unauthorizedHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  if (err.status === 401) {
    res.status(401).json({ message: err.message });
  } else {
    next(err);
  }
};

// Error handler for 404 not found
export const notFoundHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  if (err.status === 404) {
    res.status(404).json({ message: err.message });
  } else {
    next(err);
  }
};

// Error handler for 500 internal server error
export const internalServerErrorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
};