import s3 from "./lib/S3/index.js";

const S3Service = new s3("cloudinary", {
  cloud_name: "drcxgkipb",
  api_key: "478369933689513",
  api_secret: "z51oKer4jXDMgcaaESH6UPOGPuE",
});

export default S3Service;
