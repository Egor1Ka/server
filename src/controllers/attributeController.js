import attributeServices from "../services/attributeServices.js";
import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";

// Создать атрибут
const createAttribute = async (req, res) => {
  try {
    const attr = await attributeServices.createAttribute(req.body);
    httpResponse(res, generalStatus.SUCCESS, attr);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все атрибуты
const getAttributes = async (req, res) => {
  try {
    const attrs = await attributeServices.getAttributes(req.query);
    httpResponse(res, generalStatus.SUCCESS, attrs);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить один атрибут
const getAttribute = async (req, res) => {
  try {
    const attr = await attributeServices.getAttributeById(req.params.id);
    if (!attr) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Attribute not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, attr);
  } catch (error) {
    httpResponseError(res, error);
  }
};

const getAttributeValuesById = async (req, res) => {
  try {
    const values = await attributeServices.getAttributeValuesById(
      req.params.id
    );
    if (!values) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Attribute not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, values);
  } catch (error) {
    httpResponseError(res, error);
  }
};

const updateAttribute = async (req, res) => {
  try {
    const attr = await attributeServices.updateAttribute(
      req.params.id,
      req.body
    );
    if (!attr) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Attribute not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, attr);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Удалить атрибут
const deleteAttribute = async (req, res) => {
  try {
    const deleted = await attributeServices.deleteAttribute(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Attribute not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Attribute deleted" });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export {
  createAttribute,
  getAttributes,
  getAttribute,
  getAttributeValuesById,
  updateAttribute,
  deleteAttribute,
};
