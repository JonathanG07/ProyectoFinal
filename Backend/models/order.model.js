import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  idUser: {type: mongoose.Schema.ObjectId, ref: 'User'}, // String is shorthand for {type: String}
  shipped: { type: String, required: true },
  totalPrice: String,
});

//User model
export const Order = mongoose.model("Order", orderSchema);
