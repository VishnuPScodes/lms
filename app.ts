import express from 'express';
import { connect } from './src/db';
import dotenv from 'dotenv';
import session from 'express-session'
import passport from 'passport'
import assignmentRouter from './src/routes/assignments.routes';
import authRoute from './src/routes/auth.routes';
dotenv.config();

const app = express();
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/assignments', assignmentRouter);
app.use('/auth', authRoute);
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL;
app.listen(PORT, async () => {
  try {
    await connect(MONGO_URL);
    console.log('listening to the port ', PORT)
  } catch (error) {
    console.log('got error', error);
  }
});

