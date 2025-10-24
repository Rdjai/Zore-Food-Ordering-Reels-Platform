import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

import router from './routes/Auth.routes.js'

import adminRoute from "./routes/admin.routes.js"
import foodRoute from './routes/food.route.js';
import paymentRoute from './routes/payment.routes.js';
import cors from "cors"
import { isAdmin } from "./middleware/admin.middleware.js";
dotenv.config();
const app = express();
connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("watch and order the food and check the comment or review and feed back on the food")
})

//user routes

app.use("/api/auth", router);
app.use("/api/admin", adminRoute);
app.use("/api/food", foodRoute);
app.use("/api/payment", paymentRoute)




app.listen(3000, () => console.log("server started at port 3000✅ "))