import { deleteUserByAdmin, banUser, getAllReels, getAllRestaurants, getAllUsers, removeReel } from "../controllers/admin.controller.js"
import express from "express";
import { isAdmin } from "../middleware/admin.middleware.js";
import { authMiddlewere } from "../middleware/auth.middlewere.js";
const router = express.Router();

router.delete("/admin/users/:id", authMiddlewere, isAdmin, deleteUserByAdmin);

router.get("/users", authMiddlewere, isAdmin, getAllUsers);
router.delete("/users/:id", authMiddlewere, isAdmin, banUser)
// Restaurants
router.get("/restaurants", authMiddlewere, isAdmin, getAllRestaurants);

// Reels
router.get("/reels", authMiddlewere, isAdmin, getAllReels);
router.delete("/reels/:id", authMiddlewere, isAdmin, removeReel);

export default router;
