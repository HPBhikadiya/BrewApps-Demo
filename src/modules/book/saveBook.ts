import { Book } from ".";
import { BookModel } from "./schema";

/**
 *
 * @param book book class
 * @returns created book
 */
export const saveBook = async (book: Book) => {
  const saveBookData = await new BookModel(book.toJSON()).save();
  return new Book(saveBookData);
};
