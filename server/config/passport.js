import { Strategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
export const bearerAuth = new Strategy(function (token, done) {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  if (!user) {
    return done(null, false);
  }

  return done(null, user, { scope: "all" });
});
