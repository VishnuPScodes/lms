import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export interface User {
  regData: {
    _id: string;
    phoneNumber: number;
    proPic: string;
    firstName: string;
    lastName: string;
  }
}

const verifyToken = (token: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (process.env.JWT_SECRET_KEY) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user as User);
        }
      });
    } else {
      reject(new Error('JWT_SECRET_KEY not set'));
    }
  });
};

export const isAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(400).send({ message: 'Authorization token was not provided' });
  }

  if (!req.headers.authorization.startsWith('Bearer ')) {
    return res.status(400).send({ message: 'Authorization token was not provided' });
  }

  const token = req.headers.authorization.split(' ')[1];

  let user: User | undefined;

  try {
    user = await verifyToken(token);
    req.user = user;
  } catch (error) {
    res.status(400).send({ message: 'Authorization token was not provided' });
    return 'some thing went wrong'
  }

  console.log(req.user);
  next();
};
