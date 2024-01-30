import express from 'express';
import { registerUser, userLogin, updateProfilePic } from '../controller/auth.controller';
import { isAuthenticate } from '../middlewares/authenticate.middleware';
const authRoute = express.Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', userLogin);
authRoute.patch('/updateProfile', isAuthenticate, updateProfilePic);

export default authRoute;