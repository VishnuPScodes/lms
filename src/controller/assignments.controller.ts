import { AssignmentModel } from "../models/assignments.model"
import { Request, Response } from "express";
import assignmentsService from "../services/assignments.service";

export const getAllAssignments = async (req: Request, res: Response) => {
  const userId = req.user?.regData._id as string;

  const allAssignments = await assignmentsService.getAssignments(userId)
  res.status(200).send(allAssignments);
};
