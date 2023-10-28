import mongoose from "mongoose";

//Product schema
const productSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  amount: { type: String, required: true },
  price: String,
});

//User model
export const Product = mongoose.model("Product", productSchema);
