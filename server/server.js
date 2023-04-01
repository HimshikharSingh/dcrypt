// Import modules
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Create application
const app = express();

// Middleware
app.use(morgan("common"));
app.use(helmet());
// set up cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // replace with your frontend URL
    credentials: true,
  })
);

// Routes
app.use("/store", require("./routes/fetchStoreData.routes"));
app.use("/api", require("./routes/fetchData.routes"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
