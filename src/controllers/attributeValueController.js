import attributeValueServices from "../services/attributeValueServices.js";
import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";

// Создать значение
const createAttributeValue = async (req, res) => {
  try {
    const value = await attributeValueServices.createAttributeValue(req.body);
    httpResponse(res, generalStatus.SUCCESS, value);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// создать прачкку значений
const createAttributeValuesBatch = async (req, res) => {
  try {
    const values = req.body.values; // [{ value, attribute }]

    if (!Array.isArray(values) || !values.length) {
      return httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "Array of values required"
      );
    }
    const result = await attributeValueServices.createAttributeValuesBatch(
      values
    );
    httpResponse(res, generalStatus.SUCCESS, result);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все значения
const getAttributeValues = async (req, res) => {
  try {
    const values = await attributeValueServices.getAttributeValues(req.query);
    httpResponse(res, generalStatus.SUCCESS, values);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить одно значение
const getAttributeValue = async (req, res) => {
  try {
    const value = await attributeValueServices.getAttributeValueById(
      req.params.id
    );
    if (!value) {
      httpResponseError(
        res,
        generalStatus.NOT_FOUND,
        "Attribute value not found"
      );
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, value);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Обновить значение
const updateAttributeValue = async (req, res) => {
  try {
    const value = await attributeValueServices.updateAttributeValue(
      req.params.id,
      req.body
    );
    if (!value) {
      httpResponseError(
        res,
        generalStatus.NOT_FOUND,
        "Attribute value not found"
      );
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, value);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Удалить значение
const deleteAttributeValue = async (req, res) => {
  try {
    const deleted = await attributeValueServices.deleteAttributeValue(
      req.params.id
    );
    if (!deleted) {
      httpResponseError(
        res,
        generalStatus.NOT_FOUND,
        "Attribute value not found"
      );
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, {
      message: "Attribute value deleted",
    });
  } catch (error) {
    httpResponseError(res, error);
  }
};

//удалить пачку

const deleteAttributeValuesBatch = async (req, res) => {
  console.log("huuii");
  try {
    const values = req.body.values;
    console.log("deleteAttributeValuesBatch", values);

    if (!Array.isArray(values) || !values.length) {
      return httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "Array of ids required"
      );
    }
    const result = await attributeValueServices.deleteAttributeValuesBatch(
      values
    );
    httpResponse(res, generalStatus.SUCCESS, {
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export {
  createAttributeValue,
  createAttributeValuesBatch,
  getAttributeValues,
  getAttributeValue,
  updateAttributeValue,
  deleteAttributeValue,
  deleteAttributeValuesBatch,
};
