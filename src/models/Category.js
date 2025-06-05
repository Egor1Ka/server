import mongoose from "mongoose";
const { Schema, model } = mongoose;

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
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    attributes: [{ type: Schema.Types.ObjectId, ref: "Attribute" }], // просто ссылки на Attribute
  },
  { timestamps: true }
);

export default model("Category", CategorySchema);
