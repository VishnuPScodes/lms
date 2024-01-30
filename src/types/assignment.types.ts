export interface IAssignmentReturnValue {
  title: string,
  description: string,
  attachments: string[],
  author: string,
  status: string
};

export interface IGetAssignmentParams {
  _id: string;
  limit: number;
  skip: number;
}
