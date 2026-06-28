import express from 'express'
import { userLogin , userRagister , userLogout , refreshAccessToken , googleLogin} from '../../controllers/Auth/Auth.controller.js'
import { authMiddleware } from '../../middleware/Auth.middleware.js'

const router = express.Router();

router.post('/register' , userRagister);
router.post('/login' , userLogin);
router.post('/logout' ,authMiddleware, userLogout);
router.post('/accesstoken' , refreshAccessToken);
router.post('/google-login' , googleLogin);

export default router;