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
    },
    {
      id: 2,
      name: "Product 2",
    },
  ]);
});

// method res is used to send a response to the client

router.get("/login", (req, res) => {
  res.send("<h1>Hello, this is Login</h1>");
});

export default router;
