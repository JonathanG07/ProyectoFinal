import mongoose from "mongoose";

//Product schema
const productOrderedSchema = new mongoose.Schema({
  idProduct: {type: mongoose.Schema.ObjectId, ref: 'Product'}, // String is shorthand for {type: String}
  idOrder: {type: mongoose.Schema.ObjectId, ref: 'Order'},
});

//User model
export const ProductOrdered = mongoose.model("ProductOrdered", productOrderedSchema);
