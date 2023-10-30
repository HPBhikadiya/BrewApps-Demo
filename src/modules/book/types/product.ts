import { isUndefined, omitBy } from "lodash";
import { Types } from "mongoose";

export interface IBook {
  _id?: string;
  title: string;
  bookId: string; // B00010
  author: string;
  summary?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Book implements IBook {
  _id?: string;
  title: string;
  bookId: string;
  author: string;
  summary?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(input?: IBook) {
    this._id = input._id
      ? input._id.toString()
      : new Types.ObjectId().toString();
    this.title = input.title;
    this.bookId = input.bookId;
    this.author = input.author;
    this.summary = input.summary;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }

  toJSON(): IBook {
    return omitBy(this, isUndefined) as IBook;
  }
}
