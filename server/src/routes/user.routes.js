import express from 'express'
import { UserProfile, updateStore, updateUser, followUser, unfollowUser, getFollower, getFollowing } from '../controllers/user/user.controller.js';
import { addAddress, getAddress, updateAddress } from '../controllers/user/address.controller.js';
import { authMiddlewere } from '../middleware/auth.middlewere.js';
const router = express.Router();



router.get("/:id", UserProfile);
router.put("/user/:id", updateUser);
router.put("/store/:id", updateStore);
router.post("/users/:id/follow", followUser);
router.delete("/users/:id/follow", unfollowUser);
router.get("/users/:id/followers", getFollower);
router.get("/users/:id/following", getFollowing);
export default router;


