import mongoose from "mongoose";
import Order from "./Order.model.js"; // adjust path to your order model

// 🔧 MongoDB connection
await mongoose.connect("mongodb://localhost:27017/zore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 🧍‍♂️ Sample fixed data
const userId = "68fa837196c1df7e36be1304";
const addressId = "68fbe48c1b724f2ab45af0c2";
const foodItems = [
    { food: "68f2b184edbeb93287ec13d1", quantity: 1 },
    { food: "68f2b106ff0562d67ff20217", quantity: 1 },
];

// 📅 Generate orders for the last 365 days
const orders = [];
for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i - 1);

    // optional randomization
    const amount = Math.floor(Math.random() * (600 - 200 + 1)) + 200;
    const paymentStatuses = ["Paid", "Pending", "Failed"];
    const deliveryStatuses = ["pending", "preparing", "on_the_way", "delivered"];

    orders.push({
        user: userId,
        items: foodItems,
        amount: amount,
        paymentId: `pay_test_${i}`,
        orderId: `order_test_${i}`,
        paymentStatus: paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
        deliveryStatus: deliveryStatuses[Math.floor(Math.random() * deliveryStatuses.length)],
        address: addressId,
        createdAt: date,
        updatedAt: date,
    });
}

// 💾 Save all orders
await Order.insertMany(orders);
console.log("✅ 365 sample orders inserted successfully for 1 year!");

mongoose.connection.close();
