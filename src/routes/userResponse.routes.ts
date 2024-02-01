import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.middleware';
import { createResponseForAssignment } from '../controller/userResponse.controller';

const userResponseRouter = express.Router();

userResponseRouter.post('/', isAuthenticate, createResponseForAssignment);


export default userResponseRouter
