import attributeRepo from "../repository/attribute.js";

const createAttribute = (data) => attributeRepo.createAttribute(data);
const getAttributeValuesById = (id) => {
  return attributeRepo.getAttributeValuesById(id);
};
const getAttributes = (filter = {}) => attributeRepo.getAttributes(filter);
const getAttributeById = (id) => attributeRepo.getAttributeById(id);
const updateAttribute = (id, update) =>
  attributeRepo.updateAttribute(id, update);
const deleteAttribute = (id) => attributeRepo.deleteAttribute(id);

export default {
  createAttribute,
  getAttributes,
  getAttributeById,
  updateAttribute,
  deleteAttribute,
  getAttributeValuesById,
};
