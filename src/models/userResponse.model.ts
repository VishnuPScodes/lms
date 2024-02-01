import mongoose from 'mongoose';

export interface IUserResponse {
  title: string,
  description: string,
  attachments: string[],
  userId: string,
  status: string,
  batch: string
};

export enum assignementStatusEnum {
  VALUATED = 'valuated',
  OPEN = 'open',
  NEW = 'new'
};

export const userResponseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  attachments: {
    type: [String],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: Object.values(assignementStatusEnum)
  },
  batch: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }
);

export const UserResponseModel = mongoose.model<IUserResponse>('userResponse', userResponseSchema);
