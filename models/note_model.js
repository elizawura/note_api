import mongoose, { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
    },
    body: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("note", noteSchema);
