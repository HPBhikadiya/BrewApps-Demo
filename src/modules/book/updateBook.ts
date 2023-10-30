import { Book } from ".";
import { BookModel } from "./schema";

/**
 *
 * @param book
 * @returns update book record
 */
export const updateBook = async (book: Book) => {
  await BookModel.findByIdAndUpdate(book._id, book.toJSON());
  return new Book(book);
};
