import Attribute from "../models/Attribute.js";
import AttributeValue from "../models/AttributeValue.js";

const createAttribute = (data) => Attribute.create(data);
const getAttributes = (filter = {}) => Attribute.find(filter);
const getAttributeById = (id) => Attribute.findById(id);
const getAttributeValuesById = (id) => AttributeValue.find({ attribute: id });
const updateAttribute = (id, update) =>
  Attribute.findByIdAndUpdate(id, update, { new: true });
const deleteAttribute = (id) => Attribute.findByIdAndDelete(id);

export default {
  createAttribute,
  getAttributes,
  getAttributeById,
  updateAttribute,
  deleteAttribute,
  getAttributeValuesById,
};
