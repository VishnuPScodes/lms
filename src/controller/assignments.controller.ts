import { AssignmentModel } from "../models/assignments.model"
import { Request, Response } from "express";
import assignmentsService from "../services/assignments.service";

export const getAllAssignments = async (req: Request, res: Response) => {
  const userId = req.user?.regData._id as string;
  const { page, limit } = req.query;
  const pageNumber = page ? Number(page) : 1;
  const limitNumber = limit ? Number(limit) : 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  const allAssignments = await assignmentsService.getAssignments({ _id: userId, limit: limitNumber, skip: skipNumber })
  res.status(200).send(allAssignments);
};
