import { Request, Response } from "express";
import AuthService from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, phoneNumber, proPic } = req.body;
  const user = await AuthService.createUser({ firstName, lastName, email, phoneNumber, proPic });

  res.status(200).send({
    message: "user created",
    token: user.token
  })
};

export const userLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = AuthService.loginUser({ email, password });

  res.send({
    message: "User created",
  })
}

export const updateProfilePic = async (req: Request, res: Response) => {
  const userId = req.user?.regData._id as string;
  const { proPic } = req.body;
  const profile = await AuthService.updateProPic(userId, proPic);

  res.status(200).send(profile);
}
