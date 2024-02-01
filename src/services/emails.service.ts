
import { BadRequestError } from "../errors/bad-request.error";
import { AssignmentRepository } from "../repositories/assignments.repository";
import { MailToAdminRepository } from "../repositories/mailToAdmin.repository";
import { IGetEmailsByUserParams, IMailToAdmin } from "../types/emails.types";



class MailToAdminServices {
  constructor(private readonly _mailToAdminRepository: MailToAdminRepository) { };

  async getEmailsByUser(params: IGetEmailsByUserParams): Promise<IMailToAdmin | any[]> {
    const { _id, limit, skip } = params
    const emails = await this._mailToAdminRepository.getEmailsByUser({ _id, limit, skip });
    if (!emails) {
      throw new BadRequestError();
    }
    return emails;
  }

  async createMailToAdmin(params: IMailToAdmin): Promise<IMailToAdmin | any[]> {
    const { userId, message, status, hasUserViewed } = params
    const emails = await this._mailToAdminRepository.createMailToAdmin({ userId, message, status, hasUserViewed });
    if (!emails) {
      throw new BadRequestError();
    }
    return emails;
  }
};

export default new MailToAdminServices(new MailToAdminRepository);