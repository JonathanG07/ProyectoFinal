import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

export const productRouter = Router();

//CRUD
//CREATE user
productRouter.post("/", createProduct);

//GET all users
productRouter.get("/", getProducts);

//GET user by id
productRouter.get("/:id", getProduct);

//UPDATE user by id
productRouter.patch("/:id", updateProduct);

//delete user by id
productRouter.delete("/:id", deleteProduct);
