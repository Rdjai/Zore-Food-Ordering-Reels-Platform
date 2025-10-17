import express from "express";
import { authMiddlewere } from "../middleware/auth.middlewere.js";
// import { UserAuthRegistrtion, UserLogin, myProfile } from "../controllers/auth.controller.js";

import { UserAuthRegistrtion, UserLogin, myProfile } from "../controllers/auth/auth.controller.js";


const router = express.Router();
router.post("/register", UserAuthRegistrtion);
router.post("/login", UserLogin);
router.get("/me", authMiddlewere, myProfile);


export default router;