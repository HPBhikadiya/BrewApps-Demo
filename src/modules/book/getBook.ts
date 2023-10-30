import { Book } from ".";
import { BookModel } from "./schema";

export const getBook = async () => {
  const book = await BookModel.find().sort({ index: 1 });
  return book && book.length
    ? book.map((item) => new Book(item))
    : [];
};
