import { Request, Response } from "express";
import assignmentsService from "../services/assignments.service";
import tokenService from "../services/token.service";

export const createToken = async (req: Request, res: Response) => {
  const userId = req.user?.regData._id as string;
  const { title, description, status } = req.body;
  const allAssignments = await tokenService.createToken({ userId, title, description, status });

  res.status(200).send(allAssignments);
};

export const replyToToken = async (req: Request, res: Response) => {
  const { tokenId } = req.params;
  const { replies } = req.body;
  const token = await tokenService.replyToToken({ _id: tokenId, replies });

  res.status(200).send({
    message: "replied ",
    data: token
  })
}
