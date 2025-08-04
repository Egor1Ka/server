import categoryRepository from "../repository/category.js";
import S3Service from "../S3.js";
import { isValidUrl } from "../utils/links.js";

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
  const { url } = await S3Service.base64Upload(image.url);

  const category = {
    status,
    description,
    image: { url },
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
  const { image } = update;

  const isUrl = isValidUrl(image.url);
  const { url } = isUrl ? image : await S3Service.base64Upload(image.url);

  const updatedCategory = {
    ...update,
    image: { url },
  };

  return await categoryRepository.updateCategory(id, updatedCategory);
};

const deleteCategory = async (id) => {
  return await categoryRepository.deleteCategory(id);
};

const getCategoryAttributesWithValues = async (id) => {
  return await categoryRepository.getCategoryAttributesWithValues(id);
};

export default {
  getCategoryAttributesWithValues,
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
