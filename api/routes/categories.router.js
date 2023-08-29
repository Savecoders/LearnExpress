import { Router } from "express";
import { faker } from "@faker-js/faker";
const router = Router();

// two parameters in the route
router.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// post products
router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body,
  });
});

// patch and put products
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "updated",
    data: body,
    id,
  });
});

// delete products
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id,
  });
});

// what is middleware?
// middleware is a function that
// has access to the request and response

export default router;
