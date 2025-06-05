import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AttributeValueSchema = new Schema(
  {
    attribute: {
      type: Schema.Types.ObjectId,
      ref: "Attribute",
      required: true,
    },
    value: { type: String, required: true }, // например "Белый"
    // Можно добавить colorHex, image, sortOrder, etc.
  },
  { timestamps: true }
);

export default mongoose.models.AttributeValue ||
  mongoose.model("AttributeValue", AttributeValueSchema);
