import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: { type: String },
    avatar: { type: String },
    bio: { type: String, maxlength: 200 },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    role: {
        type: String,
        enum: ["admin", "user", "restaurant"],
        default: "user"
    },
    storeDetaile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restorent"
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    savedReels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reel" }],

}, {
    timestamps: true
}

);

export default mongoose.model("User", userSchema)