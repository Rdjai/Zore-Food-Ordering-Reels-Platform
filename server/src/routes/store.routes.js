import express from "express";
import {
    addRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
} from "../controllers/store.controller.js";
import { isAdminOrOwner } from "../middleware/role.middlewere.js"
import { authMiddlewere } from "../middleware/auth.middlewere.js";

const router = express.Router();

router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", getRestaurantById);
router.post("/restaurants", authMiddlewere, isAdminOrOwner, addRestaurant);
router.put("/restaurants/:id", authMiddlewere, isAdminOrOwner, updateRestaurant);
router.delete("/restaurants/:id", authMiddlewere, isAdminOrOwner, deleteRestaurant);
router.get("/restaurants/:id/reels", getAllRestaurants);


export default router;
