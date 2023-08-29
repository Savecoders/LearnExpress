// Main entry point for the application
import express from "express";
import routerApi from "./routes/routes.router.js";

// middleware
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
} from "./middlewares/error.handler.js";

// Constants
const PORT = process.env.PORT || 3000;
const app = express();

// Cors
// Cross-origin resource sharing (CORS) is a mechanism that allows
import cors from "cors";

// Start the server listening on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

// use cors
app.use(cors());

// basic routes

app.get("/api", (req, res) => {
  res.send("Basic route");
});

// routes for the application
routerApi(app);
// error routes

app.get("*", (req, res) => {
  res.status(404).send("404");
});

// middleware
// what is middleware?
// middleware is a function that
// has access to the request and response
// Error handler middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// the order of the middleware is important
// the error handler middleware must be the last one
// to catch all the errors
