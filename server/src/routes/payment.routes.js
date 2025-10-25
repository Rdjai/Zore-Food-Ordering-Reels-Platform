import express from "express";
import { createOrder, verifyPayment } from "../controllers/payment/payment.controller.js";
import { authMiddlewere } from "../middleware/auth.middlewere.js";

const router = express.Router();

router.post("/create-order", authMiddlewere, createOrder);
router.post("/verify-payment", authMiddlewere, verifyPayment);

export default router;
