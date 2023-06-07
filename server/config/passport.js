import { Strategy } from "passport-http-bearer";
import GoogleStrategy from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const bearerAuth = new Strategy(function (token, done) {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  if (!user) {
    return done(null, false);
  }

  return done(null, user, { scope: "all" });
});

export const googleAuth = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ["profile"],
    state: true,
  },
  function verify(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    return cb(null, profile);
  }
);
