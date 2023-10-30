import { Book } from ".";
import { BookModel } from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBookByQuery = async (query: any) => {
  const book = await BookModel.find(query)
    .sort({ relevanceDate: 1 })
    .limit(5);
  return book && book.length
    ? book.map((item) => new Book(item))
    : [];
};
