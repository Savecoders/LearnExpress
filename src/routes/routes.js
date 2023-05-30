import categoriesRouter from "./categories.js";
import productsRouter from "./products.js";
import usersRouter from "./users.js";

function routerApi(app) {
  app.use("/api/v1/categories", categoriesRouter);
  app.use("/api/v1/products", productsRouter);
  app.use("/api/v1/users", usersRouter);
}

export default routerApi;
