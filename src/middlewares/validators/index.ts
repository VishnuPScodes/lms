
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export interface ValidationError {
  field: {
    error: {
      param: any
    }
  };
  message: string;
}


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error) => {
      return {
        field: error,
        message: error.msg,
      };
    });

    return res.status(422).json({ errors: validationErrors });
  }

  next();
};
