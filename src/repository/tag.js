import Tag from "../models/Tag.js";

const createTag = async (tag) => {
  return await Tag.create(tag);
};

const getTagById = async (id) => {
  return await Tag.findById(id);
};

const getTags = async (filter) => {
  return await Tag.find(filter);
};

const updateTag = async (id, update) => {
  return await Tag.findByIdAndUpdate(id, update, { new: true });
};

const deleteTag = async (id) => {
  return await Tag.findByIdAndDelete(id);
};

export default {
  createTag,
  getTagById,
  getTags,
  updateTag,
  deleteTag,
};
