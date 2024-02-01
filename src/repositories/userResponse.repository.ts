import { AssignmentModel } from "../models/assignments.model";
import { UserResponseModel } from "../models/userResponse.model";
import { IGetAssignmentParams } from "../types/assignment.types";
import { IUserResponseParams } from "../types/userResponse.types";


export class UserReponseRepository {
  private _assigmentModel = UserResponseModel;
  async getResponses(params: IGetAssignmentParams) {
    const { batch, limit, skip } = params;
    const assignments = this._assigmentModel.aggregate([
      {
        $match: {
          batch,
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

  async submitAssignment(params: IUserResponseParams) {
    const { title, description, attachments, userId, status, batch } = params;
    const assignment = await this._assigmentModel.create({ title, description, attachments, userId, status, batch });

    return assignment;
  }
  async removeSubmission(assignmentId: string) {
    const assignment = await this._assigmentModel.findOneAndDelete({ _id: assignmentId });

    return assignment;
  }

};
