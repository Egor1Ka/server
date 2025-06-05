import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AttributeSchema = new Schema(
  {
    name: { type: String, required: true }, // например, "Цвет"
    code: { type: String, required: true, unique: true }, // например, "color"
    type: {
      type: String,
      enum: ["select"], // тип значения
      default: "string",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Attribute ||
  mongoose.model("Attribute", AttributeSchema);
