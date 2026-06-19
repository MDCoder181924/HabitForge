import express from 'express'
import { userLogin , userRagister , userLogout , refreshAccessToken } from '../../controllers/Auth/Auth.controller.js'
import { authMiddleware } from '../../middleware/Auth.middleware.js'

const router = express.Router();

router.post('/register' , userRagister);
router.post('/login' , userLogin);
router.post('/logout' ,authMiddleware, userLogout);
router.post('/accesstoken' , refreshAccessToken);

export default router;