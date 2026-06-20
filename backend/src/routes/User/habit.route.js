import express from 'express'
import { getHabit , habitCreat , habitComplitRemove  , habitComplit } from '../../controllers/User/habit.controller.js'
import { authMiddleware } from '../../middleware/Auth.middleware.js';

const route = express.Router();

route.post('/create',authMiddleware,habitCreat);
route.get('/habits',authMiddleware,getHabit);
route.post('/complit',authMiddleware,habitComplit);
route.post('/remove',authMiddleware,habitComplitRemove);

export default route