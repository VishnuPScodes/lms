import { BadRequestError } from "../errors/bad-request.error";
import { UserModel } from "../models/user.model";
import { IUserLoginType, IUserRegParams } from "../types/auth.types";
import { ObjectId } from 'mongodb';

export class AuthRepository {
  private _usermodel = UserModel

  async createUser(params: IUserRegParams) {
    const { firstName, lastName, email, phoneNumber, proPic } = params;
    const user = await this._usermodel.create({ firstName, lastName, email, phoneNumber, proPic });

    return user;
  }

  async loginUser({ email, password }: IUserLoginType): Promise<IUserRegParams> {
    const user = await this._usermodel.findOne({ email, password }).lean();
    if (!user) {
      throw new BadRequestError('Unable to login');
    }

    return user
  };

  async updateProPic(proPic: string, userId: string) {

    const profile = this._usermodel.findOneAndUpdate({ _id: new ObjectId(userId) }, { proPic }, { new: true });

    return profile;
  }

};
