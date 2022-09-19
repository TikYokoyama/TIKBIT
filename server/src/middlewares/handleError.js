import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'express-validation';

function handleError(
  error,
  req,
  res,
  next
) {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }
  
  return res.status(500).json(error);
}

module.exports = handleError