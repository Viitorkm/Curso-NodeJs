import express from "express";
import routes from "./routes.js";
class App {
  constructor() {
    this.server = express();
    this.middleWares();
    this.routes();
  }

  middleWares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
