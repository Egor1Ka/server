export const parseAuthToken = (authorization) => {
  return authorization?.split(" ")[1];
};
