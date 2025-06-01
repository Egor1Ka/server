import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import tagServices from "../services/tagServices.js";

// Создать тег
const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "Поле name обязательно"
      );
      return;
    }
    const tag = await tagServices.createTag({ name });
    httpResponse(res, generalStatus.SUCCESS, tag);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить один тег
const getTag = async (req, res) => {
  try {
    const tag = await tagServices.getTagById(req.params.id);
    if (!tag) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Tag not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, tag);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все теги
const getTags = async (req, res) => {
  try {
    const tags = await tagServices.getTags();
    httpResponse(res, generalStatus.SUCCESS, tags);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Обновить тег
const updateTag = async (req, res) => {
  try {
    const tag = await tagServices.updateTag(req.params.id, req.body);
    if (!tag) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Tag not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, tag);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Удалить тег
const deleteTag = async (req, res) => {
  try {
    const deleted = await tagServices.deleteTag(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Tag not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Tag deleted" });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export { createTag, getTag, getTags, updateTag, deleteTag };
