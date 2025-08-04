import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import productServices from "../services/productServices.js";
import { isValidUrl } from "../utils/links.js";
import S3Service from "../S3.js";

const createProduct = async (req, res) => {
  try {
    const {
      images,
      name,
      currency,
      quantity,
      description,
      categoryId,
      tags,
      status,
      variants,
      defaultPrice,
    } = req.body;

    if (!name || !categoryId) {
      httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "name, categoryId и хотя бы один вариант обязательны"
      );
      return;
    }

    const uploadImages = await Promise.all(
      images.map(async (image) => {
        const { url } = isValidUrl(image.url)
          ? image
          : await S3Service.base64Upload(image.url);
        return { url };
      })
    );

    console.log(uploadImages);

    const product = await productServices.createProduct({
      images: uploadImages,
      name,
      currency,
      description,
      categoryId,
      quantity,
      tags,
      status: status || "draft",
      defaultPrice,
      //// userId,
      variants,
    });
    httpResponse(res, generalStatus.SUCCESS, product);
  } catch (error) {
    console.log(error);
    httpResponseError(res, error);
  }
};

// Получить один продукт
const getProduct = async (req, res) => {
  try {
    const product = await productServices.getProductById(req.params.id);
    if (!product) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Product not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, product);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все продукты (можно добавить фильтры через req.query)
const getProducts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.categoryId) filter.categoryId = req.query.categoryId;
    if (req.query.tag) filter.tags = req.query.tag;
    const products = await productServices.getProducts(filter);
    httpResponse(res, generalStatus.SUCCESS, products);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Обновить продукт
const updateProduct = async (req, res) => {
  try {
    const product = await productServices.updateProduct(
      req.params.id,
      req.body
    );
    if (!product) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Product not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, product);
  } catch (error) {
    console.log(error);
    httpResponseError(res, error);
  }
};

// Удалить продукт
const deleteProduct = async (req, res) => {
  try {
    const deleted = await productServices.deleteProduct(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Product not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Product deleted" });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export { createProduct, getProduct, getProducts, updateProduct, deleteProduct };
