import categoryRepository from "../repository/category.js";

const createCategory = async ({
  name,
  slug,
  parentId,
  status,
  description,
  attributes,
  image,
  imageType,
  createdBy,
}) => {
  // Тут можно делать бизнес-валидацию (например, запрещать дубли слуг/имён)
  const category = {
    status,
    description,
    image,
    imageType,
    attributes,
    name,
    slug,
    parentId: parentId || null,
    //createdBy,
  };

  return await categoryRepository.createCategory(category);
};

const getCategoryById = async (id) => {
  return await categoryRepository.getCategoryById(id);
};

const getCategories = async (filter = {}) => {
  return await categoryRepository.getCategories(filter);
};

const updateCategory = async (id, update) => {
  return await categoryRepository.updateCategory(id, update);
};

const deleteCategory = async (id) => {
  return await categoryRepository.deleteCategory(id);
};

export default {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
