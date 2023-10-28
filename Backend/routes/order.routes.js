import { Router } from "express";
import authJWT from "../middleware/auth.js";
import {createOrder, getOrders, getOrder, updateOrder, deleteOrder} from "../controllers/order.controller.js";

export const orderRouter = Router();

orderRouter.use(authJWT);
orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrder);
orderRouter.patch("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

