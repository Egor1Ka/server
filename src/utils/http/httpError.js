export class HttpError extends Error {
  constructor({ status, appStatusCode, message }, data) {
    super(message);
    this.appStatusCode = appStatusCode;
    this.status = status;
    this.data = data;
  }
}

export class DomainError extends Error {
  constructor({ code = 200, message }) {
    super(message);
    this.code = code;
  }
}
