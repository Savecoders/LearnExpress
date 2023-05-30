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

export default router;
