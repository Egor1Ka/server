export const googleLoginMapping = {
  name: "name",
  picture: "picture",
  authTokens: {
    access_token: "access_token", // result.authTokens.accessToken = source.access_token
    refresh_token: "refresh_token", // result.authTokens.refreshToken = source.refresh_token
    type: () => "google", // result.authTokens.type = "google"
  },
};
