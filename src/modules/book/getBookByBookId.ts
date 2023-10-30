import { Book } from ".";
import { BookModel } from "./schema";

export const getBookByBookId = async ({ bookId }: { bookId: string }) => {
  const book = await BookModel.findOne({ bookId });
  return book ? new Book(book) : null;
};
