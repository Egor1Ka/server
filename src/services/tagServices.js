import tagRepository from "../repository/tag.js";

const createTag = async ({ name }) => {
  // Можно добавить валидацию/проверку на уникальность
  return await tagRepository.createTag({ name });
};

const getTagById = async (id) => {
  return await tagRepository.getTagById(id);
};

const getTags = async (filter = {}) => {
  return await tagRepository.getTags(filter);
};

const updateTag = async (id, update) => {
  return await tagRepository.updateTag(id, update);
};

const deleteTag = async (id) => {
  return await tagRepository.deleteTag(id);
};

export default {
  createTag,
  getTagById,
  getTags,
  updateTag,
  deleteTag,
};
