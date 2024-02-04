import { INTERNAL_SERVER_ERROR } from "./constants.util.js";

class HttpError {
  constructor(statusText, status = INTERNAL_SERVER_ERROR, error) {
    this.status = status;
    this.message = statusText;
    error && (this.details = error);
  }
}

export default HttpError;
