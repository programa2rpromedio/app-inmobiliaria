const errorMiddleware = (error, req, res, next) => {
  console.log(error);
};

export default errorMiddleware;
