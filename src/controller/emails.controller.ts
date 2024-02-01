import { Request, Response } from "express";
import MailToAdminServices from "../services/emails.service"

export const getEmailsByUser = async (req: Request, res: Response) => {
  const userId = '6440eb4607be091a2274d6e9'
  const { page, limit } = req.query;
  const pageNumber = page ? Number(page) : 1;
  const limitNumber = limit ? Number(limit) : 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  const emails = await MailToAdminServices.getEmailsByUser({ _id: userId, limit: limitNumber, skip: skipNumber })
  res.status(200).send(emails);
};

export const createMailToAdmin = async (req: Request, res: Response) => {
  const userId = req.user?.regData._id as string;
  const emailData = req.body
  const createdMailToAdmin = await MailToAdminServices.createMailToAdmin({ userId, ...emailData })
  res.status(200).send(createdMailToAdmin);

};
