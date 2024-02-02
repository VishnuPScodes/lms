import express from 'express';
import { isAuthenticate } from '../middlewares/authenticate.middleware';
import { createToken, replyToToken } from '../controller/token.controller';

const tokenRouter = express.Router();

tokenRouter.post('/', isAuthenticate, createToken);
tokenRouter.patch('/:tokenId', isAuthenticate, replyToToken);


export default tokenRouter
