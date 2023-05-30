import { Router } from "express";
import { faker } from "@faker-js/faker";
const router = Router();

// return json get
// use faker to generate fake data
router.get("/", (req, res) => {
  const products = [];
  const { limit = 10 } = req.query;
  // generate 10 products
  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    });
  }
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

  /* `res` is an object that represents the HTTP response that the server */
  res.json({
    id,
    name: `Product ${id}`,
    price: 100,
  });
});

export default router;
