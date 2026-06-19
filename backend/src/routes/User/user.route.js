import express from 'express';
import { getProfile } from '../../controllers/User/user.controller.js'
import { authMiddleware } from '../../middleware/Auth.middleware.js';

const router = express.Router();

router.get('/profile' ,authMiddleware, getProfile);

export default router;