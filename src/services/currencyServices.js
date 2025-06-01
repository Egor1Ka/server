import Currency from "../models/Currency.js";

const createCurrency = async (data) => Currency.create(data);

const getCurrencyById = async (id) => Currency.findById(id);

const getCurrencies = async (filter = {}) => Currency.find(filter);

const updateCurrency = async (id, update) =>
  Currency.findByIdAndUpdate(id, update, { new: true });

const deleteCurrency = async (id) => Currency.findByIdAndDelete(id);

export default {
  createCurrency,
  getCurrencyById,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
};
