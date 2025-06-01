import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TagSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default model("Tag", TagSchema);
