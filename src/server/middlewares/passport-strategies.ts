import * as passport from "passport";
import * as jwtStrategy from "passport-jwt";
import * as PassportLocal from "passport-local";
import db from "../db";
import config from "../config";
import { comparePasswords } from "../utils/passwords";
import type { IPayload } from "../utils/tokens";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new PassportLocal.Strategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {

        const [users] = await db.users.find("email", email);
        if (users && comparePasswords(password, users.password)) {
          delete users.password;
          done(null, users);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

passport.use(
  new jwtStrategy.Strategy(
    {
      jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.auth.secret,
    },
    async (payload: IPayload, done) => {
      try {
        const [user] = await db.users.find("id", payload.userid);
        if (user) {
          delete user.password;
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);