import { AssignmentModel } from "../models/assignments.model"
import { Request, Response } from "express";

export const getAllAssignments = async (req: Request, res: Response) => {
  //const user = req.user.id;
  const allAssignments = await AssignmentModel.find().select('title description attatchments author status');
  res.status(200).send(allAssignments);
};
