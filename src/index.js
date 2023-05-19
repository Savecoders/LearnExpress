// Desc: Main entry point for the application
import express from "express";
import router from "./routes/route.js";

const PORT = 3000;
const app = express();

// Start the server listening on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// routes for the application

app.use("/", router);
