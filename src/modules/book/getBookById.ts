import { Book } from ".";
import { BookModel } from "./schema";

export const getBookById = async (_id: string) => {
  const book = await BookModel.findById(_id);
  return book ? new Book(book) : null;
};
