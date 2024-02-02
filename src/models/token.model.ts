import mongoose from "mongoose";


export enum tokenStatusEnun {
  NEW = 'NEW',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  PENDING = 'PENDING'
};

const userRepiesSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean
  },
  message: {
    type: String
  }
})
export const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  replies: {
    type: [userRepiesSchema]
  },
  status: {
    type: String,
    enum: Object.values(tokenStatusEnun),
    default: tokenStatusEnun.NEW
  }
});

export interface ITokenTypes extends Document {
  userId: string;
  title: string;
  description: string;
  status: string;
};

export const TokenModel = mongoose.model<ITokenTypes>('token', tokenSchema);