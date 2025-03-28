import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";
class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://devhousedb:devhouse@devhousedb.2ytesk7.mongodb.net/devhousedb?retryWrites=true&w=majority&appName=devhousedb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

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
