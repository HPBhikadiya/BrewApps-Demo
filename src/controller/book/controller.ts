import { Response } from "express";
import { Request } from "../../request";
import Joi from "joi";
import { get as _get } from "lodash";
import {
  Book,
  deleteBook,
  getBook,
  getBookById,
  getBookByBookId,
  saveBook,
  updateBook,
} from "../../modules/book";

export default class Controller {
  protected readonly createBookSchema = Joi.object({
    title: Joi.string().required(),
    bookId: Joi.string()
      .required()
      .external(async (value) => {
        if (!value) return value;
        const book = await getBookByBookId({ bookId: value });
        if (book) {
          throw new Error("Book Id is associated with another book");
        }
        return value;
      }),
    author: Joi.string().required(),
    summary: Joi.string().optional().allow("", null),
  });

  protected readonly updateBookSchema = Joi.object({
    title: Joi.string().optional(),
    bookId: Joi.string().optional(),
    author: Joi.string().optional(),
    summary: Joi.string().optional().allow("", null),
  });

  protected readonly create = async (req: Request, res: Response) => {
    try {
      const payload = req.body;

      const payloadValue = await this.createBookSchema
        .validateAsync(payload)
        .then((value) => {
          return value;
        })
        .catch((e) => {
          console.log(e);
          res.status(422).json({ message: e.message });
        });
      if (!payloadValue) {
        return;
      }

      const book = await saveBook(
        new Book({
          ...payloadValue,
          subBook: [],
        })
      );

      res.status(200).json(book);
    } catch (error) {
      console.log("error", "error at create book #################### ", error);

      res.status(500).json({
        message: "Hmm... Something went wrong. Please try again later.",
        error: _get(error, "message"),
      });
    }
  };

  protected readonly update = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params;

      if (!bookId) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      const book = await getBookById(bookId);

      if (!book) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      const payload = req.body;

      const payloadValue = await this.updateBookSchema
        .validateAsync(payload)
        .then((value) => {
          return value;
        })
        .catch((e) => {
          console.log(e);
          res.status(422).json({ message: e.message });
        });
      if (!payloadValue) {
        return;
      }

      if (payloadValue.bookId) {
        const tmpBook = await getBookByBookId({
          bookId: payloadValue.bookId,
        });
        if (tmpBook) {
          if (tmpBook._id.toString() !== bookId.toString()) {
            res.status(422).json({
              message: "Book Id is associated with another book",
            });
            return;
          }
        }
      }

      const updatedBook = await updateBook(
        new Book({ ...book, ...payloadValue })
      );

      res.status(200).json(updatedBook);
    } catch (error) {
      console.log("error", "error at update book #################### ", error);

      res.status(500).json({
        message: "Hmm... Something went wrong. Please try again later.",
        error: _get(error, "message"),
      });
    }
  };

  protected readonly get = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params;

      if (!bookId) {
        const book = await getBook();

        res.status(200).json(book);
        return;
      }

      const book = await getBookById(bookId);

      if (!book) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      res.status(200).json(book);
    } catch (error) {
      console.log("error", "error at get book #################### ", error);

      res.status(500).json({
        message: "Hmm... Something went wrong. Please try again later.",
        error: _get(error, "message"),
      });
    }
  };

  protected readonly getByBookId = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params;

      if (!bookId) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      const book = await getBookByBookId({ bookId });

      if (!book) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      res.status(200).json(book);
    } catch (error) {
      console.log(
        "error",
        "error at get book  by getByBookId #################### ",
        error
      );

      res.status(500).json({
        message: "Hmm... Something went wrong. Please try again later.",
        error: _get(error, "message"),
      });
    }
  };

  protected readonly delete = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params;

      if (!bookId) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      const book = await getBookById(bookId);

      if (!book) {
        res.status(422).json({
          message: "Please provide valid Book.",
        });
        return;
      }

      await deleteBook(bookId);

      res.status(200).json({
        message: "Book Deleted Successfully.",
      });
    } catch (error) {
      console.log("error", "error at delete book #################### ", error);

      res.status(500).json({
        message: "Hmm... Something went wrong. Please try again later.",
        error: _get(error, "message"),
      });
    }
  };
}
