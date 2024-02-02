import redisClient from '../configs/redis.configs';
import { Request, Response } from 'express';

export const rateLimiter = (req: Request, res: Response) => {
  const ip = req.ip;


  const rate = redisClient.set(ip, (data) => {

  })
}