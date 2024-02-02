
import { TokenModel, tokenStatusEnun } from '../models/token.model';
import { ITokenParams, ITokenReplyParams } from '../types/token.types';


export class TokenRepository {
  private _tokenToAdmin = TokenModel;

  async createToken(params: ITokenParams) {
    const { userId, title, description, status } = params;

    const createdToken = this._tokenToAdmin.create({ userId, title, description, status });

    return createdToken;
  }

  async replyToToken(params: ITokenReplyParams) {
    const { _id, replies, } = params;
    const token = this._tokenToAdmin.findOneAndUpdate({ _id }, {
      $push: {
        replies
      },
      $set: {
        status: tokenStatusEnun.NEW
      }
    });

    return token
  }

};