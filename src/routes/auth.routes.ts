import express from 'express';
import { registerUser, userLogin } from '../controller/auth.controller';
const authRoute = express.Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', userLogin);

export default authRoute;