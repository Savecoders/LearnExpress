import { Router } from "express";
import { faker } from "@faker-js/faker";
import { ProductsService } from "../services/product.service.js";

const router = Router();
const service = new ProductsService();
// get products

// return json get
// use faker to generate fake data
router.get("/", (req, res) => {
  const products = service.find();
  res.json(products);
});

// get products by id
// new endpoint with a parameter in the route
// specify the parameter in the route by prefixing it with a colon (:)
router.get("/filter", (req, res) => {
  const { name } = req.query;
});

// dinamic endpoint with a parameter in the route
router.get("/:id", (req, res) => {
  /* `req` is an object that represents the HTTP request made by the client
  to the server. It contains information about the request such as the
  URL, HTTP method, headers, and any data sent in the request body. The
  server uses this information to process the request and generate an
  appropriate response. */
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// post products
// post is used to create new resources
// the body of the request contains
// the data of the new resource
router.post("/", (req, res) => {
  // get body from request
  // the native middleware express.json() is used to parse the body
  const body = req.body;
  // create the product
  const newProduct = service.create(body);
  res.status(201).json(newProduct); // 201 is the status code for created
});

// patch and put products
// patch is used to update only
// the fields that are sent in the request
// put is used to update all the fields
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  // update the product
  service.update(id, body);
  // patch: update only the fields that are sent in the request
  res.json({
    message: "updated",
    data: body,
    id,
  });
});

// delete products
// delete is used to delete resources
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // delete the product
  service.delete(id);
  res.json({
    message: "deleted",
    id,
  });
});
export default router;
