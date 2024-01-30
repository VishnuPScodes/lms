import { AssignmentModel } from "../models/assignments.model";
import { IAssignmentReturnValue } from "../types/assignment.types";


export class AssignmentRepository {
  private _assigmentModel = AssignmentModel;
  async getAssignments(_id: string) {
    const assignments = this._assigmentModel.aggregate([
      {
        $match: {
          _id
        }
      }
    ]);
    return assignments
  }

}