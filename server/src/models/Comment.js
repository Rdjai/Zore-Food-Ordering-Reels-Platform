import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        reelId: { type: mongoose.Schema.Types.ObjectId, ref: "Reel", required: true },
        text: { type: String, required: true, maxlength: 300 }
    },
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
