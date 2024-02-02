

export interface ITokenParams {
  title: string;
  userId: string;
  description: string;
  status?: string;
  replies: [
    {
      isAdmin: boolean;
      message: string;
    }
  ]

}