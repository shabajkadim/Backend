import { Router } from "express";
import UserRoutes from './Auth.route.js'

const router=Router();

router.use('/auth',UserRoutes)

export default router;