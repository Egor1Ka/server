import Category from "../models/category.js";

const createCategory = async (category) => {
  return await Category.create(category);
};

const getCategoryById = async (id) => {
  console.log("idididid", id);
  return await Category.findById(id);
};

const getCategories = async (filter) => {
  return await Category.find(filter);
};

const updateCategory = async (id, update) => {
  return await Category.findByIdAndUpdate(id, update, { new: true });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export default {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
