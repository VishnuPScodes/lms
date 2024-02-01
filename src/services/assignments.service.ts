import { BadRequestError } from "../errors/bad-request.error";
import { AssignmentRepository } from "../repositories/assignments.repository";
import { IAssignmentReturnValue, IGetAssignmentParams } from "../types/assignment.types";



class AssignmentsService {
  constructor(private readonly _assigmnentRepository: AssignmentRepository) { };

  async getAssignments(params: IGetAssignmentParams): Promise<IAssignmentReturnValue | any[]> {
    const { batch, limit, skip } = params
    const assignments = await this._assigmnentRepository.getAssignments({ batch, limit, skip });
    if (!assignments) {
      throw new BadRequestError();
    }

    return assignments;
  }
};

export default new AssignmentsService(new AssignmentRepository);