import { Strategy } from "passport-http-bearer";
import GoogleStrategy from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import config from "./config.js";
export const bearerAuth = new Strategy(function (token, done) {
  const user = jwt.verify(token, config.jwt.secret);
  if (!user) {
    return done(null, false);
  }
  return done(null, user, { scope: "all" });
});

export const googleAuth = new GoogleStrategy(
  {
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    scope: ["profile"],
    state: true,
  },
  async function verify(accessToken, refreshToken, profile, cb) {
    const existUser = await User.findOne({ email: profile.emails[0].value });
    console.log(existUser);
    if (existUser?.avatarLink === null) {
      existUser.avatarLink = profile.photos[0].value;
      await existUser.save();
    }
    // console.log(existUser);
    if (!existUser) {
      const user = new User({
        email: profile.emails[0].value,
        name: profile.displayName,
        googleId: profile.id,
      });
      await user.save();
      const token = user.createJWT();
      return cb(null, {
        user: {
          userName: user.name,
          email: user.email,
          role: user.role,
          token,
        },
      });
    }

    const token = existUser.createJWT();
    return cb(null, {
      user: {
        userName: existUser.name,
        email: existUser.email,
        role: existUser.role,
        token,
      },
    });
  }
);
