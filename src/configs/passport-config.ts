import passport from 'passport'
import passportLocal from 'passport-local';
import { IUser, UserModel } from "../models/user.model";


const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
