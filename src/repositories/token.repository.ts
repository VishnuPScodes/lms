import { ObjectId } from 'mongodb';
import { mailToAdminModel } from "../models/mail.model";
import { IGetEmailsByUserParams, IMailToAdmin } from "../types/emails.types";
import { TokenModel } from '../models/token.model';
import { ITokenParams } from '../types/token.types';


export class MailToAdminRepository {
  private _mailToAdmin = TokenModel;

  async createToken(params: ITokenParams) {
    const { userId, title, description, status } = params;

    const createdToken = this._mailToAdmin.create({ userId, title, description, status });

    return createdToken;
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