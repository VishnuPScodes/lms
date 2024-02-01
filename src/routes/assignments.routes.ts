import express from 'express';
import { getAllAssignments } from '../controller/assignments.controller';
import { authenticate } from 'passport';
import { isAuthenticate } from '../middlewares/authenticate.middleware';

const assignmentRouter = express.Router();

assignmentRouter.get('/', isAuthenticate, getAllAssignments);


export default assignmentRouter

