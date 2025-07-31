import { v2 as cloudinary } from "cloudinary";

class CloudinaryAdapter {
  #name = "cloudinary";

  constructor({ cloud_name, api_key, api_secret }) {
    cloudinary.config({ cloud_name, api_key, api_secret });
    this.client = cloudinary;
  }

  async bufferUpload(buffer) {
    return new Promise((resolve, reject) => {
      this.client.uploader
        .upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(buffer);
    });
  }

  async base64Upload(base64Str, format = "auto") {
    const dataUri = `data:image/${format};base64,${base64Str}`;
    return this.client.uploader.upload(dataUri);
  }
}

export default CloudinaryAdapter;
