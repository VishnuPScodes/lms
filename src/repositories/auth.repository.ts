import { BadRequestError } from "../errors/bad-request.error";
import { UserModel } from "../models/user.model";
import { IUserLoginType, IUserRegParams } from "../types/auth.types";


export class AuthRepository {
  private _usermodel = UserModel

  async createUser(params: IUserRegParams) {
    const { firstName, lastName, email, phoneNumber, proPic } = params;
    console.log('here its fine')
    const user = await this._usermodel.create({ firstName, lastName, email, phoneNumber, proPic });
    console.log('reached', user)
    return user;
  }

  async loginUser({ email, password }: IUserLoginType): Promise<IUserRegParams> {
    const user = await this._usermodel.findOne({ email, password }).lean();
    if (!user) {
      throw new BadRequestError('Unable to login');
    }

    return user
  }
  async updateProPic(proPic: string, userId: string) {
    const profile = this._usermodel.updateOne({ _id: userId }, { proPic });
    return profile;
  }

};
