import express from "express";
import cors from "cors";
import Book from "./controller/book";

export default class App {
  public static instance: express.Application;
  private static port: number;
  public static start(port) {
    this.instance = express();
    this.port = port;

    // Add middleware.
    this.initializeMiddleware();

    // Add controllers
    this.initializeControllers();
  }

  private static initializeMiddleware() {
    // logger

    // CORS
    this.instance.use(
      cors({
        origin: true,
        credentials: true,
        exposedHeaders: "x-auth-token",
      })
    );

    // Body Parser
    this.instance.use(express.json({ limit: "50mb" })); // support json encoded bodies
  }

  private static initializeControllers() {
    this.instance.use("/book", new Book().router);
  }
}
