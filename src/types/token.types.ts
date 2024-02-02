
export interface ITokenParams {
  title: string;
  userId: string;
  description: string;
  status?: string;
  _id?: any;
  replies?: [
    {
      isAdmin: boolean;
      message: string;
    }
  ]

}

export interface ITokenReplyParams {
  replies: [
    {
      isAdmin: boolean;
      message: string;
    }
  ],
  _id: any
}