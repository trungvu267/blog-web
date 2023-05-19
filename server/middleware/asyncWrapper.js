import { StatusCodes } from "http-status-codes";

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
      next(error);
    }
  };
};

export default asyncWrapper;
