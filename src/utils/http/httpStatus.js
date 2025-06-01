export const generalStatus = {
  ERROR: {
    status: 500,
    message: "serverError",
  },
  SUCCESS: {
    status: 200,
    message: "success",
  },
  BAD_REQUEST: {
    status: 400,
    message: "Bad Request",
    description: "The request cannot be fulfilled due to bad syntax.",
  },
  NOT_FOUND: { status: 404, message: "notFound" },
};
export const contractStatus = {
  SUBSCRIPTION_EXIST: {
    status: 409,
    message: "subscriptionExist",
  },
};
export const captchaStatus = {
  EMPTY_TOKEN: {
    message: "emptyToken",
    status: 400,
  },
  VERIFIED_TOKEN: {
    message: "verifiedToken",
    status: 200,
  },
  INVALID_TOKEN: {
    message: "invalidToken",
    status: 400,
  },
};
export const registrationStatus = {
  SUCCESS: { status: 200, message: "confirmationEmailSent" },
  USER_WITH_EMAIL_EXISTS: { status: 409, message: "userWithEmailExists" },
  CUSTOMER_WITH_EMAIL_EXISTS: {
    status: 409,
    message: "customerWithEmailExists",
  },
  USER_NOT_FOUND: { status: 404, message: "userNotFound" },
  ERROR: { status: 500, message: "registrationError" },
};

export const loginStatus = {
  SUCCESS: { status: 200, message: "SuccessfullyLoggedIn" },
  UNAUTHORIZED: { status: 401, message: "NotLoggedIn" },
  ACCESS_DENIED: { status: 403, message: "AccessDenied" },
  INCORRECT_CREDENTIALS: {
    status: 400,
    message: "IncorrectEmailOrPassword",
  },
  SUSPECT_LOGIN: {
    status: 200,
    message: "suspectLogin",
  },
  SESSIONS_LIMITED: {
    status: 200,
    message: "sessionsLimited",
  },
  ERROR: { status: 500, message: "LoginError" },
};
export const logoutStatus = {
  SUCCESS: { status: 200, message: "SuccessfullyLoggedOut" },
  ERROR: { status: 500, message: "LogoutError" },
};
export const changePasswordStatus = {
  SUCCESS: { status: 200, message: "changePasswordSuccess" },
  SHORT_PASSWORD: { status: 400, message: "ShortPassword" },
  INVALID_OR_EXPIRED_TOKEN: {
    status: 400,
    message: "InvalidOrExpiredToken",
  },
  USER_NOT_FOUND: { status: 400, message: "UserNotFound" },
  ERROR: { status: 500, message: "ChangePasswordError" },
};

export const paymentStatus = {
  SUCCESS: { status: 200, message: "PaymentSuccessful" },
  MISSING_PARAMETERS: {
    status: 400,
    message: "MissingPaymentParameters",
  },
  INVALID_PAYMENT: {
    status: 400,
    message: "InvalidPayment",
  },
  INVALID_METHOD: {
    status: 400,
    message: "InvalidPaymentMethod",
  },
  ERROR: { status: 500, message: "PaymentError" },
  MISSING_BODY_PARAMETERS: {
    status: 400,
    message: "MissingBodyParameters",
  },
};

export const authAppStatus = {
  SMS_SUCCESS_SEND: {
    message: "Код успішно відправлено на ваш телефон",
    status: 200,
  },
  TEMPORARILY_RESTRICTED: {
    appStatusCode: 600,
    message: "Ваш доступ тимчасово обмежений. Спробуйте знову пізніше",
  },
  SESSION_NOT_FOUND_OR_INVALID: {
    appStatusCode: 601,
    message: "Сесія не знайдена або недійсна",
  },
  SMS_LIMIT_EXCEEDED: {
    appStatusCode: 602,
    message:
      "Перевищено ліміт спроб відправки SMS. Будь ласка, спробуйте пізніше",
  },
  TOO_MANY_REQUESTS: {
    appStatusCode: 603,
    message: "Ви відправили занадто багато запитів. Зачекайте, будь ласка",
  },
  CODE_ENTRY_LIMIT_EXCEEDED: {
    appStatusCode: 604,
    message:
      "Перевищено кількість спроб введення коду. Спробуйте ще раз відправити код",
  },
  INCORRECT_CODE_ENTERED: {
    appStatusCode: 605,
    message: "Введено неправильний код. Спробуйте ще раз",
  },
};
