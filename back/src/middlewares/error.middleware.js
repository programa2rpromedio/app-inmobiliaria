import { INTERNAL_SERVER_ERROR } from "../utils/constants.util.js";

const errorMiddleware = (error, req, res, next) => {
  console.log("ERROR => ", error);
  res.status(error.status || INTERNAL_SERVER_ERROR).json({
    status: error.status || INTERNAL_SERVER_ERROR,
    response: error.message || "Internal Server Error",
  });
};

export default errorMiddleware;
