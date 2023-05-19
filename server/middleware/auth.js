import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import passport from "passport";

//NOTE: ko sử dụng hàm này
const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication Invalid" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: payload.userId, name: payload.name };
    next();
  } catch (error) {
    req
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication Invalid" });
  }
};

const auth = passport.authenticate("bearer", { session: false });
export { authentication, auth };
