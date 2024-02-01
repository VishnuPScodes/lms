import mongoose, { Types } from "mongoose";


const userMessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  isAdmin: {
    type: Boolean
  }
});

export enum mailStatusEnum {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  NEW = 'NEW'
}

export const mailToAdminSchema = new mongoose.Schema({
  userId: {
    type: Types.ObjectId
  },
  message: {
    type: [userMessageSchema]
  },
  status: {
    type: String,
    enum: Object.values(mailStatusEnum)
  },
  hasUserViewed: {
    type: Boolean,
    default: true
  },

});

export interface IMailToAdmin {
  userId: string;
  message: [{
    message: string,
    isAdmin: boolean
  }
  ],
  status: string;
  hasUserViewed: boolean
}

export const mailToAdminModel = mongoose.model<IMailToAdmin>('mails', mailToAdminSchema);