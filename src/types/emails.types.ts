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

export interface IGetEmailsByUserParams {
  _id: string;
  limit: number;
  skip: number;
}


