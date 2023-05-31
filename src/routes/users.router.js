import { Router } from "express";
import { faker } from "@faker-js/faker";

const router = Router();
// query parameters
// query is an object that contains the query parameters included in the
// request URL. For example, if the client makes a request to the URL
// http://localhost:3000/users?name=John&age=30
router.get("/", (req, res) => {
  const { name, age } = req.query;
  res.json({
    name,
    age,
  });
});

export default router;
