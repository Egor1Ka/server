import mongoose from "mongoose";
const { Schema, model, ObjectId } = mongoose;

const ImageSchema = new Schema(
  {
    url: { type: String, required: true },
    imageType: { type: String, required: false },
  },
  { _id: false }
);

const VariantAttributeSchema = new Schema(
  {
    attribute: {
      type: Schema.Types.ObjectId,
      ref: "Attribute",
      required: true,
    },
    value: {
      type: Schema.Types.ObjectId,
      ref: "AttributeValue",
      required: true,
    },
  },
  { _id: false }
);

const VariantSchema = new Schema(
  {
    quantity: Number,
    sku: { type: String, required: true },
    attributes: [VariantAttributeSchema], // Вот тут массив ссылок!
    images: [ImageSchema],
    currency: {
      type: ObjectId,
      ref: "Currency",
      required: true,
    },
    price: { type: Number, required: true },
  },
  { _id: true }
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    images: [ImageSchema],
    quantity: Number,
    defaultPrice: Number,
    currency: {
      type: ObjectId,
      ref: "Currency",
      required: true,
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    variants: [VariantSchema],
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
