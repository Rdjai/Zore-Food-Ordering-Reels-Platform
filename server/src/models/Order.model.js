import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                food: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Food",
                    required: true,
                },
                quantity: { type: Number, required: true, default: 1 },
            },
        ],
        amount: {
            type: Number,
            required: true,
        },
        paymentId: {
            type: String,
        },
        orderId: {
            type: String,
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "success", "failed"],
            default: "pending",
        },
        deliveryStatus: {
            type: String,
            enum: ["pending", "preparing", "on_the_way", "delivered"],
            default: "pending",
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid", "Failed"],
            default: "Pending",
        }
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
