import { mailToAdminModel } from "../models/mail.model";




export class AssignmentRepository {
  private _mailToAdmin = mailToAdminModel;
  async sendMailToAdmin(params: any) {
    const { userId, message } = params;
    const mail = this._mailToAdmin.create({ message });

    return mail;
  }
};