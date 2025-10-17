import express from 'express';
import { addFood, getAllFood, deleteFood, getFoodById, getFoodsByRestaurant, updateFoodById } from '../controllers/food/food.controller.js';
import { verifyRestaurant } from '../middleware/restorent.middleware.js';
import { authMiddlewere } from '../middleware/auth.middlewere.js';
const router = express.Router();

router.post('/addFood', authMiddlewere, verifyRestaurant, addFood);
router.get('/food', getAllFood);
router.delete('/deletefood/:id', authMiddlewere, verifyRestaurant, deleteFood);
router.get('/deletefood/:id', getFoodById);
router.get('/deletefood/:id', getFoodsByRestaurant);
router.get('/deletefood/:id', getFoodsByRestaurant);
router.put('/deletefood/:id', updateFoodById);
export default router;