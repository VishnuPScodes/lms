export interface IAssignmentReturnValue {
  title: string,
  description: string,
  attachments: string[],
  author: string,
  status: string,
  batch: string
};

export interface IGetAssignmentParams {
  batch: string;
  limit: number;
  skip: number;
}
