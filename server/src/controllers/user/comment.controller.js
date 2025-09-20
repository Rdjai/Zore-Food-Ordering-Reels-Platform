import Comment from "../../models/comment.model.js";
import Reel from "../models/reel.model.js";

export const addComment = async (req, res) => {
    try {
        const { reelId } = req.params;
        const { text } = req.body;

        const reel = await Reel.findById(reelId);
        if (!reel) {
            return res.status(404).json({ error: "Reel not found" });
        }

        const comment = await Comment.create({
            userId: req.user.id,
            reelId,
            text,
        });

        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            comment,
        });
    } catch (error) {
        console.error("Add comment error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getCommentsForReel = async (req, res) => {
    try {
        const { reelId } = req.params;

        const comments = await Comment.find({ reelId })
            .populate("userId", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            comments,
        });
    } catch (error) {
        console.error("Get comments error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        if (comment.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ error: "Not authorized" });
        }

        await comment.deleteOne();

        res.status(200).json({
            success: true,
            message: "Comment deleted",
        });
    } catch (error) {
        console.error("Delete comment error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
