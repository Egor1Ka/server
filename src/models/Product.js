import mongoose from "mongoose";

const { Schema, model, ObjectId } = mongoose;

const ImageSchema = new Schema(
  {
    image: { type: String, required: true }, // base64 или dataURL
    imageType: { type: String, required: true }, // например "image/png"
  },
  { _id: false } // если не нужен отдельный _id на каждую картинку
);

const VariantSchema = new Schema(
  {
    quantity: Number,
    sku: { type: String, required: true },
    attributes: { type: Map, of: String, default: {} }, // динамические атрибуты
    images: [ImageSchema],
    currency: {
      type: ObjectId,
      ref: "Currency",
      default: null,
      required: true,
    },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
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
      default: null,
      required: true,
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    attributes: [{ type: Map, of: Schema.Types.Mixed }],
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
    variants: [VariantSchema],
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
