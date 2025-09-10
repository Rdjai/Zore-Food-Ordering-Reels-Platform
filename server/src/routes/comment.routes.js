import express from "express";
import { addComment, getCommentsForReel, deleteComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:reelId", verifyToken, addComment);
router.get("/:reelId", getCommentsForReel);
router.delete("/:commentId", verifyToken, deleteComment);

export default router;
