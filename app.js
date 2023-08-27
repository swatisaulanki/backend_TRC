require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Server Live");
});

//middleware or set router te
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
