import { Router } from "express";
import UserRoutes from './user.routes.js'

const router=Router();

router.use('/auth',UserRoutes)

router.use('/auth',UserRoutes)

router.use('/card',UserRoutes)

router.use('/payment',UserRoutes)

export default router;