import cloudinaryAdapter from "./services/cloudinary.js";

const CLIENT_METHODS = ["bufferUpload", "base64Upload"];

const validateAdapterMethod = function (method) {
  // const не получилось так как у const нет this
  if (typeof this.client[method] !== "function") {
    throw new Error(
      `S3Service: адаптер должен реализовывать методы "${CLIENT_METHODS.join()}"`
    );
  }
};

const paymentsCollection = {
  cloudinary: cloudinaryAdapter,
};

class S3Service {
  constructor(providerName, opts) {
    const Adapter = paymentsCollection[providerName];
    if (!Adapter) {
      throw new Error(
        `S3Service: провайдер "${providerName}" не зарегистрирован`
      );
    }

    this.client = new Adapter(opts);

    CLIENT_METHODS.forEach(validateAdapterMethod.bind(this));
  }

  async base64Upload(buffer) {
    return this.client.base64Upload(buffer);
  }

  async bufferUpload(base64Str, format = "auto") {
    return this.client.bufferUpload(base64Str, format);
  }
}

export default S3Service;
