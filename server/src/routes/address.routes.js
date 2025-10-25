import express from "express";

const router = express.Router();
import { addAddress, getAddress, updateAddress } from '../controllers/user/address.controller.js';
import { authMiddlewere } from "../middleware/auth.middlewere.js";


router.post("/address/add", authMiddlewere, addAddress);
router.get("/address/", authMiddlewere, getAddress);
router.put("/address/:userId", authMiddlewere, updateAddress);

export default router;