import express from 'express';
import { connect } from './src/db';
import dotenv from 'dotenv';
import session from 'express-session'
import passport from 'passport'
import assignmentRouter from './src/routes/assignments.routes';
dotenv.config();

const app = express();
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/assignments', assignmentRouter);
const PORT = process.env.PORT

app.listen(PORT, async () => {
  try {
    await connect();
    console.log('listening to the port ', PORT)
  } catch (error) {
    console.log('got error', error);
  }
});

