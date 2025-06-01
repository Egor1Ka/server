import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CurrencySchema = new Schema(
  {
    code: { type: String, required: true, unique: true }, // "USD", "UAH"
    symbol: { type: String, required: true }, // "$", "₴"
    name: { type: String, required: true }, // "US Dollar", "Hryvnia"
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model("Currency", CurrencySchema);
