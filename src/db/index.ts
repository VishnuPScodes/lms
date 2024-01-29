import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL

export const connect = async () => {
  if (mongoUrl) {
    return mongoose.connect(mongoUrl)
  }
};
