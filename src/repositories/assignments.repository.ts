import { AssignmentModel } from "../models/assignments.model";
import { IAssignmentReturnValue, IGetAssignmentParams } from "../types/assignment.types";


export class AssignmentRepository {
  private _assigmentModel = AssignmentModel;
  async getAssignments(params: IGetAssignmentParams) {
    const { _id, limit, skip } = params;
    const assignments = this._assigmentModel.aggregate([
      {
        $match: {
          _id,
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $limit: limit
      },
      {
        $skip: skip
      }
    ]);

    return assignments
  }



};