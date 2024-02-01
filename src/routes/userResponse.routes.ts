import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.middleware';
import { createResponseForAssignment, removeUserSubmission } from '../controller/userResponse.controller';
import { userResponseValidator } from '../middlewares/validators/userResponse.validator';

const userResponseRouter = express.Router();

userResponseRouter.post('/', isAuthenticate, userResponseValidator, createResponseForAssignment);
userResponseRouter.delete('/:assignmentId', isAuthenticate, removeUserSubmission);

export default userResponseRouter
