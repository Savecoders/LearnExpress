import express from "express";
import categoriesRouter from "./categories.router.js";
import productsRouter from "./products.router.js";
import usersRouter from "./users.router.js";

function routerApi(app) {
  const routerFirstV = express.Router();

  // specify the version of the API in the URL
  app.use("/api/v1", routerFirstV);

  // replace de app by router
  routerFirstV.use("/categories", categoriesRouter);
  routerFirstV.use("/products", productsRouter);
  routerFirstV.use("/users", usersRouter);
}

export default routerApi;
