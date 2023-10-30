import Controller from "./controller";
import { Router } from "express";

export default class Book extends Controller {
  public router = Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/bookId/:bookId", this.getByBookId);
    this.router.get("/", this.get);
    this.router.get("/:bookId", this.get);
    this.router.post("/", this.create);
    this.router.patch("/:bookId", this.update);
    this.router.delete("/:bookId", this.delete);
  }
}
