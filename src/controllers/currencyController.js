// controllers/currencyController.js
import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import currencyServices from "../services/currencyServices.js";

// Создать валюту
const createCurrency = async (req, res) => {
  try {
    const { code, name, symbol, isDefault } = req.body;
    if (!code || !name || !symbol) {
      httpResponseError(
        res,
        generalStatus.BAD_REQUEST,
        "code, name и symbol обязательны"
      );
      return;
    }
    const currency = await currencyServices.createCurrency({
      code,
      name,
      symbol,
      isDefault,
    });
    httpResponse(res, generalStatus.SUCCESS, currency);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить одну валюту
const getCurrency = async (req, res) => {
  try {
    const currency = await currencyServices.getCurrencyById(req.params.id);
    if (!currency) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Currency not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, currency);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Получить все валюты
const getCurrencies = async (req, res) => {
  try {
    const currencies = await currencyServices.getCurrencies();
    httpResponse(res, generalStatus.SUCCESS, currencies);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Обновить валюту
const updateCurrency = async (req, res) => {
  try {
    const currency = await currencyServices.updateCurrency(
      req.params.id,
      req.body
    );
    if (!currency) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Currency not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, currency);
  } catch (error) {
    httpResponseError(res, error);
  }
};

// Удалить валюту
const deleteCurrency = async (req, res) => {
  try {
    const deleted = await currencyServices.deleteCurrency(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Currency not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Currency deleted" });
  } catch (error) {
    httpResponseError(res, error);
  }
};

export {
  createCurrency,
  getCurrency,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
};
