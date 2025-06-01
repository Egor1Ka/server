import mongoose from "mongoose";
import { attributeTypes } from "../utils/constants/attribute.js";

const { Schema, model } = mongoose;

const AttributeSchema = new Schema(
  {
    name: { type: String, required: true }, // "Ширина", "Материал"
    type: {
      type: String,
      unique: false,
      enum: attributeTypes,
      default: "string",
    },
  },
  { _id: false }
);

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: Buffer },
    imageType: { type: String },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    slug: { type: String, required: true, unique: true },
    parentId: { type: Schema.Types.ObjectId, ref: "Category", default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
    attributes: [AttributeSchema],
  },
  { timestamps: true }
);

export default model("Category", CategorySchema);
