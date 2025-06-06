import attributeValueRepo from "../repository/attributeValue.js";

const createAttributeValue = (data) =>
  attributeValueRepo.createAttributeValue(data);
const createAttributeValuesBatch = (values) =>
  attributeValueRepo.createAttributeValuesBatch(values);
const getAttributeValues = (filter = {}) =>
  attributeValueRepo.getAttributeValues(filter);
const getAttributeValueById = (id) =>
  attributeValueRepo.getAttributeValueById(id);
const updateAttributeValue = (id, update) =>
  attributeValueRepo.updateAttributeValue(id, update);
const deleteAttributeValue = (id) =>
  attributeValueRepo.deleteAttributeValue(id);
const deleteAttributeValuesBatch = (ids) =>
  attributeValueRepo.deleteAttributeValuesBatch(ids);

export default {
  createAttributeValue,
  createAttributeValuesBatch,
  getAttributeValues,
  getAttributeValueById,
  updateAttributeValue,
  deleteAttributeValue,
  deleteAttributeValuesBatch,
};
