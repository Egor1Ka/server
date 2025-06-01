import { generalStatus } from "./httpStatus.js";
import { DomainError, HttpError } from "./httpError.js";

export const httpResponse = (res, httpStatus, data) => {
  const { status = 200, message, appStatusCode = status } = httpStatus;
  return res
    .status(status)
    .json({ data, statusCode: appStatusCode, status: message });
};

export const httpResponseError = (res, error) => {
  const { status = 200, appStatusCode = status, message, data } = error;
  if (error instanceof HttpError) {
    return httpResponse(res, { status, message, appStatusCode }, data);
  }
  if (error instanceof DomainError) {
    return httpResponse(res, { status, message });
  }
  console.error(error);
  return httpResponse(res, generalStatus.ERROR);
};
