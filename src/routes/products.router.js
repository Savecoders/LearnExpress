import { Router } from "express";
import { faker } from "@faker-js/faker";

// import the service for the products
import { ProductsService } from "../services/product.service.js";

// import the schemas for the products
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} from "../schemas/product.schema.js";

// import the validator for the products
import { validatorHandler } from "../middlewares/validator.handler.js";

// create a new router
const router = Router();
const service = new ProductsService();
// get products

// return json get
// use faker to generate fake data
router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// get products by id
// new endpoint with a parameter in the route
// specify the parameter in the route by prefixing it with a colon (:)
router.get("/filter", async (req, res) => {
  const { name } = req.query;
});

// dinamic endpoint with a parameter in the route
router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    /* `req` is an object that represents the HTTP request made by the client
  to the server. It contains information about the request such as the
  URL, HTTP method, headers, and any data sent in the request body. The
  server uses this information to process the request and generate an
  appropriate response. */
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      // pass the error to the error handler middleware
      next(error);
    }
  }
);

// post products
// post is used to create new resources
// the body of the request contains
// the data of the new resource
router.post(
  "/",
  validatorHandler(updateProductSchema, "body"),
  async (req, res) => {
    // get body from request
    // the native middleware express.json() is used to parse the body
    const body = req.body;
    // create the product
    const newProduct = await service.create(body);
    res.status(201).json(newProduct); // 201 is the status code for created
  }
);

// patch and put products
// patch is used to update only
// the fields that are sent in the request
// put is used to update all the fields
router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      // update the product
      const product = await service.update(id, body);
      // patch: update only the fields that are sent in the request
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// delete products
// delete is used to delete resources
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // delete the product
  await service.delete(id);
  res.json({
    message: "deleted",
    id,
  });
});
export default router;
