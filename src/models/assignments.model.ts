import mongoose from 'mongoose';

export interface IAssignment {
  title: string,
  description: string,
  attachments: string[],
  author: string,
  status: string
}
export enum assignementStatusEnum {
  SUBMITED = 'submitted',
  VALUATED = 'valuated',
  NEW = 'new'
}
export const AssignmentSchema = new mongoose.Schema({
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
  author: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: Object.values(assignementStatusEnum)
  }

});

export const AssignmentModel = mongoose.model<IAssignment>('assignment', AssignmentSchema)
