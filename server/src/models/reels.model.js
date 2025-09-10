import mongoose from 'mongoose'

const reelSchema = mongoose.Schema({
    videoUrl: {
        type: String,
        required: true
    },
    caption: { type: String, maxlength: 500 },
    tags: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    restorentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restorent"
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User  "
    },
    comments: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",

        },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }

    }
},)
{ timestamps: true }

export default mongoose.model("Reel", reelSchema);
