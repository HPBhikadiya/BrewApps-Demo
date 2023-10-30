import { Schema, model } from "mongoose";
import { IBook } from "../types";

const book = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    bookId: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);

export const BookModel = model<IBook>("book", book);
