import { Router } from "express";
import  AuthRouter from './AuthRouter.js'
import ProductRouter from './ProductRoutes.js'

const router=Router();

router.use('/auth',AuthRouter)

router.use('/product',ProductRouter)

export default router;