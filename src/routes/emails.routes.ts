import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.middleware';
import { getEmailsByUser, createMailToAdmin } from '../controller/emails.controller';

const emailRouter = express.Router();

emailRouter.get('/', isAuthenticate, getEmailsByUser);


emailRouter.post('/', isAuthenticate, createMailToAdmin);


export default emailRouter

