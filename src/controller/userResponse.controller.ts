import { AssignmentModel } from "../models/assignments.model"
import { Request, Response } from "express";
import assignmentsService from "../services/assignments.service";
import userResponseService from "../services/userResponse.service";

export const createResponseForAssignment = async (req: Request, res: Response) => {
  const { title, description, attachments, userId, status, batch } = req.body;
  const allAssignments = await userResponseService.createAssignmentResponse({ title, description, attachments, userId, status, batch });

  res.status(200).send(allAssignments);
};

export const removeUserSubmission = async (req: Request, res: Response) => {
  const assignmentId = req.params.assignmentId;
  const assignment = await userResponseService.removeSubmission(assignmentId);

  res.status(201).send(assignment);
};
