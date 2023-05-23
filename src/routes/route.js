import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello, this is Home</h1>");
});

router.get("/about", (req, res) => {
  res.send("<h1>Hello, this is About</h1>");
});

router.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ]);
});

// get products by id

router.get("/products/:id", (req, res) => {
  /* `req` is an object that represents the HTTP request made by the client
  to the server. It contains information about the request such as the
  URL, HTTP method, headers, and any data sent in the request body. The
  server uses this information to process the request and generate an
  appropriate response. */
  const { id } = req.params;
  res.json({
    id,
    name: `Product ${id}`,
    price: 100,
  });
});

// two parameters in the route

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// query parameters
// http://localhost:3000/users?name=John&age=30
router.get("/users", (req, res) => {
  const { name, age } = req.query;
  res.json({
    name,
    age,
  });
});

// method res is used to send a response to the client

router.get("/login", (req, res) => {
  res.send("<h1>Hello, this is Login</h1>");
});

export default router;
