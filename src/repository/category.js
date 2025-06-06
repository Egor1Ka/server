import Category from "../models/category.js";
import AttributeModel from "../models/attribute.js";
import AttributeValue from "../models/attributevalue.js";

const getCategoryAttributesWithValues = async (id) => {
  // 1. Находим категорию
  const category = await Category.findById(id).lean();
  if (!category) return null;

  // 2. Все атрибуты по id
  const attributes = await AttributeModel.find({
    _id: { $in: category.attributes },
  }).lean();

  // 3. Для каждого атрибута ищем все его value
  const attributesWithValues = await Promise.all(
    attributes.map(async (attr) => {
      const values = await AttributeValue.find({ attribute: attr._id }).lean();
      return {
        ...attr,
        values: values.map((val) => ({
          id: val._id,
          value: val.value,
          code: val.code,
        })),
      };
    })
  );

  return {
    categoryId: category._id,
    attributes: attributesWithValues,
  };
};

const createCategory = async (category) => {
  return await Category.create(category);
};

const getCategoryById = async (id) => {
  return await Category.findById(id).populate("attributes");
};

const getCategories = async (filter) => {
  return await Category.find(filter).populate("attributes");
};

const updateCategory = async (id, update) => {
  return await Category.findByIdAndUpdate(id, update, { new: true });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export default {
  getCategoryAttributesWithValues,
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
};
