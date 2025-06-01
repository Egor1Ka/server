// routes/currency.js
import express from "express";
import {
  createCurrency,
  getCurrency,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
} from "../../controllers/currencyController.js";

const router = express.Router();

router.post("/", createCurrency);
router.get("/", getCurrencies);
router.get("/:id", getCurrency);
router.put("/:id", updateCurrency);
router.delete("/:id", deleteCurrency);

export default router;
