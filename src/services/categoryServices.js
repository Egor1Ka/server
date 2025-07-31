import categoryRepository from "../repository/category.js";
import S3Service from "../S3.js";

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
  const { image } = update;
  const { url } = await S3Service.base64Upload(image);

  const updatedCategory = {
    ...update,
    image: { url },
  };

  console.log("updatedCategory", updatedCategory);

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
