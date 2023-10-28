import mongoose from "mongoose";

//User schema
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  lastname: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: String,
  rol: String,
  address: String,
});

//User model
export const User = mongoose.model("User", userSchema);
