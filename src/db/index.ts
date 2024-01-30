import mongoose from 'mongoose';


export const connect = async (mongoUrl: any) => {
  if (mongoUrl) {
    return mongoose.connect(mongoUrl)
  }
};
