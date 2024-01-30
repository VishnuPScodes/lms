import { BadRequestError } from "../errors/bad-request.error";
import { AssignmentRepository } from "../repositories/assignments.repository";
import { IAssignmentReturnValue } from "../types/assignment.types";



class AssignmentsService {
  constructor(private readonly _assigmnentRepository: AssignmentRepository) { };

  async getAssignments(_id: string): Promise<IAssignmentReturnValue | any[]> {
    const assignments = await this._assigmnentRepository.getAssignments(_id);
    if (!assignments) {
      throw new BadRequestError();
    }
    return assignments;
  }
};

export default new AssignmentsService(new AssignmentRepository);