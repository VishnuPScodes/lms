import { BadRequestError } from "../errors/bad-request.error";
import { TokenRepository } from "../repositories/token.repository";
import { ITokenParams, ITokenReplyParams } from "../types/token.types";


class TokenService {
  constructor(private readonly _tokenRepository: TokenRepository) { };

  async createToken(params: ITokenParams): Promise<ITokenParams | any[]> {
    const { userId, title, description, status } = params;
    const token = await this._tokenRepository.createToken({ userId, title, description, status });
    if (!token) {
      throw new BadRequestError('Could not create token');
    }

    return token;
  }

  async replyToToken(params: ITokenReplyParams) {
    const { _id, replies, } = params;
    const token = this._tokenRepository.replyToToken({ _id, replies });

    return token
  }
};

export default new TokenService(new TokenRepository);