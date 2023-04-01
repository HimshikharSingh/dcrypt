// Import modules
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Create application
const app = express();

const CLIENT_URL = process.env.CLIENT_URL;
console.log(CLIENT_URL);

// Middleware
app.use(morgan("common"));
app.use(helmet());
// set up cors middleware
app.use(
  cors({
    origin: CLIENT_URL, // replace with your frontend URL
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
