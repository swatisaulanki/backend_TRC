const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  image: { type: String, required: true },
  saller: { type: String, required: true },
  availability: { type: Boolean, required: true },
  stockQuantity: { type: Number, required: true },
  brand: { type: String, required: true },
  manufacturer: { type: String, required: true },
  releaseDate: { type: Date, default: Date.now() },
  features: { type: Array, required: true },
});

module.exports = mongoose.model("Product", productSchema);
