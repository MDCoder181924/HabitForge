import express from 'express';
import { getProfile , userSetting , parmanetDeleteAccount } from '../../controllers/User/user.controller.js'
import { authMiddleware } from '../../middleware/Auth.middleware.js';

const router = express.Router();

router.get('/profile' ,authMiddleware, getProfile);
router.post('/setting' ,authMiddleware, userSetting);
router.post('/delete' ,authMiddleware, parmanetDeleteAccount);

export default router;