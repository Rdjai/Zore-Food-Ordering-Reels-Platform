import Reel from "../models/reels.model.js";

export const createReel = async (req, res) => {
    try {
        const { videoUrl, caption, tags, restaurantId } = req.body;

        const reel = await Reel.create({
            videoUrl,
            caption,
            tags,
            restaurantId,
            userId: req.user.id,
        });

        res.status(201).json({ success: true, reel });
    } catch (error) {
        console.error("Create reel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllReels = async (req, res) => {
    try {
        const { page = 1, limit = 10, trending } = req.query;

        const query = {};
        if (trending) {
            query.likes = { $exists: true, $not: { $size: 0 } };
        }

        const reels = await Reel.find(query)
            .populate("userId", "name email")
            .sort(trending ? { likes: -1 } : { createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json({ success: true, reels });
    } catch (error) {
        console.error("Get reels error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getReelById = async (req, res) => {
    try {
        const reel = await Reel.findById(req.params.id).populate("userId", "name email");
        if (!reel) return res.status(404).json({ error: "Reel not found" });

        res.status(200).json({ success: true, reel });
    } catch (error) {
        console.error("Get reel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteReel = async (req, res) => {
    try {
        const reel = await Reel.findById(req.params.id);
        if (!reel) return res.status(404).json({ error: "Reel not found" });

        if (reel.userId.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ error: "Not authorized" });
        }

        await reel.deleteOne();
        res.status(200).json({ success: true, message: "Reel deleted" });
    } catch (error) {
        console.error("Delete reel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const likeReel = async (req, res) => {
    try {
        const reel = await Reel.findById(req.params.id);
        if (!reel) return res.status(404).json({ error: "Reel not found" });

        if (reel.likes.includes(req.user.id)) {
            return res.status(400).json({ error: "Already liked" });
        }

        reel.likes.push(req.user.id);
        await reel.save();

        res.status(200).json({ success: true, message: "Reel liked" });
    } catch (error) {
        console.error("Like reel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const unlikeReel = async (req, res) => {
    try {
        const reel = await Reel.findById(req.params.id);
        if (!reel) return res.status(404).json({ error: "Reel not found" });

        reel.likes = reel.likes.filter((id) => id.toString() !== req.user.id);
        await reel.save();

        res.status(200).json({ success: true, message: "Reel unliked" });
    } catch (error) {
        console.error("Unlike reel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

