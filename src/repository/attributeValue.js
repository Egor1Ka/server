import AttributeValue from "../models/AttributeValue.js";

const createAttributeValue = (data) => AttributeValue.create(data);
const createAttributeValuesBatch = (values) =>
  AttributeValue.insertMany(values);
const getAttributeValues = (filter = {}) =>
  AttributeValue.find(filter).populate("attribute");
const getAttributeValueById = (id) => AttributeValue.findById(id);
const updateAttributeValue = (id, update) =>
  AttributeValue.findByIdAndUpdate(id, update, { new: true });
const deleteAttributeValue = (id) => AttributeValue.findByIdAndDelete(id);
const deleteAttributeValuesBatch = (ids) =>
  AttributeValue.deleteMany({ _id: { $in: ids } });

export default {
  createAttributeValuesBatch,
  createAttributeValue,
  getAttributeValues,
  getAttributeValueById,
  updateAttributeValue,
  deleteAttributeValue,
  deleteAttributeValuesBatch,
};
