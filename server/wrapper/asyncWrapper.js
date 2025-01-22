// ReqWrapper.js

export default function asyncWrapper(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error(error.error);
      next(error); // Pass the error to the next middleware
    }
  };
}
