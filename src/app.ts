import express from "express";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import { handleError } from "./api/middlewares/handleErrors";
import { router } from "./api/router";
import path from "path";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp"))
    );
  }

  private routes(): void {
    this.express.use(router);
    this.express.use(handleError);
  }
}

export default new App().express;
