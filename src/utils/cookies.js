export { parseCookies, getCookieByName };

const splitCookieString = (cookieString) => {
  const [key, ...valueParts] = cookieString.split("=");

  return { key: key.trim(), value: decodeURIComponent(valueParts.join("=")) };
};

const cookieReducer = (acc, cookieString) => {
  const { key, value } = splitCookieString(cookieString);

  acc[key] = value;
  return acc;
};

const parseCookies = (cookieHeader) =>
  cookieHeader ? cookieHeader.split(";").reduce(cookieReducer, {}) : {};

const getCookieByName = (cookieHeader, name) => {
  const cookies = parseCookies(cookieHeader);
  return cookies[name] || undefined;
};
