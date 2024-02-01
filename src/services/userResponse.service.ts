import { BadRequestError } from "../errors/bad-request.error";
import { UserReponseRepository } from "../repositories/userResponse.repository";
import { IUserResponseParams } from "../types/userResponse.types";


class UserResponseService {
  constructor(private readonly _userResponseRepository: UserReponseRepository) { };

  async createAssignmentResponse(params: IUserResponseParams): Promise<IUserResponseParams | any[]> {
    const { title, description, attachments, userId, status, batch } = params;
    const assignments = await this._userResponseRepository.submitAssignment({ title, description, attachments, userId, status, batch });
    if (!assignments) {
      throw new BadRequestError();
    }

    return assignments;
  }
};

export default new UserResponseService(new UserReponseRepository);
