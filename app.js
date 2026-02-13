const express = require("express");

const app = express();

app.use(express.json());

// import routes
const authRoutes = require("./src/routes/authRoutes");

// use routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
