import mongoose from 'mongoose';


// const addonSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true, min: 0 },
// });



const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Food name is required"],
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Food price is required"],
        min: 0,
    },
    category: {
        type: String,
        enum: [
            "Main Course",
            "Snacks",
            "Dessert",
            "Drinks",
            "Fast Food",
            "Salad",
            "Pizza",
            "Burger",
            "Indian",
            "Others",
        ],
        default: "Others",
    },
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
    isAvailable: {
        type: Boolean,
        default: true,
    },

    // addOns: [addonSchema],
    ratings: {
        average: { type: Number, default: 0 },
        count: { type: Number, default: 0 },
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    totalSells: { type: Number, default: 0 },


}
    ,
    { timestamps: true }
)

const Food = mongoose.model("Food", foodSchema);

export default Food;