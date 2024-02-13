import { Router } from "express";
import AuthRoute from './AuthRoutes.js'
import ProductRoute from './ProductRoute.js'
const router =Router()

router.use('/auth',AuthRoute)
router.use('/product',ProductRoute)

export default router;