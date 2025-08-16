import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.put("/add", authMiddleware, addToCart);
cartRouter.put("/remove", authMiddleware, removeFromCart);
cartRouter.get("/get", authMiddleware, getCart);

export default cartRouter;
