import mongoose from 'mongoose'

const RestorentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    location: {
        address: { type: String, required: true },
        city: { type: String, index: true },
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    cuisine: [{ type: String }],
    images: [{ type: String }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

},
    {
        timestamps: true
    });

export default mongoose.model("restorent", RestorentSchema)