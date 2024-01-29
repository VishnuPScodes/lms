import { BadRequestError } from "../errors/bad-request.error";
import { AuthRepository } from "../repositories/auth.repository";
import { IUserLoginType, IUserRegParams } from "../types/auth.types";
import jwt from 'jsonwebtoken'

class AuthService {
  constructor(private readonly _authRepository: AuthRepository) { }

  async createUser(params: IUserRegParams) {
    const newtoken = (regData: any) => {
      if (process.env.JWT_SECRET_KEY)

        return jwt.sign({ regData }, process.env.JWT_SECRET_KEY);
    };

    const { firstName, lastName, email, phoneNumber, proPic } = params
    const user = await this._authRepository.createUser({ firstName, lastName, email, phoneNumber, proPic });
    if (!user) {
      throw new BadRequestError('We could not create the user!');
    }
    const token = newtoken(user);

    return {
      status: 'successful',
      token
    }
  }
  async loginUser({ email, password }: IUserLoginType) {
    const user = await this._authRepository.loginUser({ email, password });
    if (!user) {
      throw new BadRequestError('Unable to login');
    }
    return user
  }

}

export default new AuthService(new AuthRepository);