import Product from "../models/Product.js";

const createProduct = async (product) => {
  return await Product.create(product);
};

const getProductById = async (id) => {
  return await Product.findById(id)
    .populate("categoryId")
    .populate("tags")
    .populate("userId");
};

const getProducts = async (filter) => {
  return await Product.find(filter)
    .populate("categoryId")
    .populate("tags")
    .populate("userId")
    .populate("currency");
};

const updateProduct = async (id, update) => {
  return await Product.findByIdAndUpdate(id, update, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
};
