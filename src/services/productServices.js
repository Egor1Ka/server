import productRepository from "../repository/product.js";

const createProduct = async (data) => {
  // Можно добавить валидацию и логику по умолчанию для variants, цен и т.д.
  return await productRepository.createProduct(data);
};

const getProductById = async (id) => {
  return await productRepository.getProductById(id);
};

const getProducts = async (filter = {}) => {
  return await productRepository.getProducts(filter);
};

const updateProduct = async (id, update) => {
  return await productRepository.updateProduct(id, update);
};

const deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id);
};

export default {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
};
