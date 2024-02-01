import { check } from "express-validator";
import { validateRequest } from ".";


export const userResponseValidator = [
  check('batch', 'batch name is needed please add')
    .notEmpty(),
  validateRequest
]