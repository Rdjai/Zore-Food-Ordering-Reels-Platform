import express from "express";
import {
    createReel,
    getAllReels,
    getReelById,
    deleteReel,
    likeReel,
    unlikeReel,
} from "../controllers/reel.controller.js";
import {
    addComment,
    getCommentsForReel,
} from "../controllers/comment.controller.js";
import { authMiddlewere } from "../middleware/auth.middlewere.js";

const router = express.Router();

router.post("/", auth, createReel);          // Upload new reel
router.get("/", getAllReels);                       // Get all reels
router.get("/:id", getReelById);                    // Get single reel
router.delete("/:id", authMiddlewere, deleteReel);     // Delete reel

router.post("/:id/like", authMiddlewere, likeReel);
router.post("/:id/unlike", authMiddlewere, unlikeReel);

router.post("/:id/comment", authMiddlewere, addComment);
router.get("/:id/comments", getCommentsForReel);

export default router;
