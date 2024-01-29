import mongoose, { Document } from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose'

export interface IUser {
  firstName: string,
  lastName: string,
  phoneNumber: number,
  email: string,
  proPic: string
}

export const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  proPic: {
    type: String
  }
});
userSchema.plugin(passportLocalMongoose);

export const UserModel = mongoose.model<IUser>('user', userSchema);