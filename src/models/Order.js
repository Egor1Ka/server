import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const FieldSchema = new Schema(
  {
    name: { type: String, required: true },
    value: { type: Schema.Types.Mixed, required: true },
  },
  { _id: false }
);

const ItemSchema = new Schema(
  {
    product: { type: Types.ObjectId, ref: "Product", required: true },
    variantId: { type: Types.ObjectId, ref: "Variant", required: true },
    currency: { type: Types.ObjectId, ref: "Currency", required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const OrderSchema = new Schema(
  {
    items: { type: [ItemSchema], required: true },
    fields: { type: [FieldSchema], default: [] },
    subtotal: { type: Number, required: true },
    shippingCost: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "paypal", "online"],
      default: "cash",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model("Order", OrderSchema);
