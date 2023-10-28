import { Router } from "express";
import {
  createProductOrdered,
  getProductsOrdered,
  getProductOrdered,
  updateProductOrdered,
  deleteProductOrdered,
} from "../controllers/productOrdered.controller.js";

export const productOrderedRouter = Router();

//CRUD
//CREATE user
productOrderedRouter.post("/", createProductOrdered);

//GET all users
productOrderedRouter.get("/", getProductsOrdered);

//GET user by id
productOrderedRouter.get("/:id", getProductOrdered);

//UPDATE user by id
productOrderedRouter.patch("/:id", updateProductOrdered);

//delete user by id
productOrderedRouter.delete("/:id", deleteProductOrdered);
