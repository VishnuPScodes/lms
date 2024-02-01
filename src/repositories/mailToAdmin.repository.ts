import { ObjectId } from 'mongodb';
import { mailToAdminModel } from "../models/mail.model";
import { IGetEmailsByUserParams, IMailToAdmin } from "../types/emails.types";


export class MailToAdminRepository {
  private _mailToAdmin = mailToAdminModel;

  async createMailToAdmin(params: IMailToAdmin) {
    const { userId, hasUserViewed, message, status } = params;

    const createdMail = this._mailToAdmin.create({ userId, hasUserViewed, message, status });

    return createdMail;
  }

  async getEmailsByUser(params: IGetEmailsByUserParams) {
    const { _id, limit, skip } = params;

    const mail = this._mailToAdmin.aggregate([{
      $match: {
        userId: new ObjectId(_id)
      }
    },
    {
      $sort: {
        createdAt: -1
      }
    },
    {
      $skip: skip
    },
    {
      $limit: limit
    }
    ])

    return mail;
  }
};