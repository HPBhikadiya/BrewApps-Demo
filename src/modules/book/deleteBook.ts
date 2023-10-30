import { BookModel } from "./schema";

export const deleteBook = async (_id: string) => {
  await BookModel.findByIdAndDelete(_id);
  return;
};
