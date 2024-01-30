import express from 'express';
import { registerUser, userLogin, updateProfilePic } from '../controller/auth.controller';
const authRoute = express.Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', userLogin);
authRoute.post('/updateProfile', updateProfilePic);

export default authRoute;