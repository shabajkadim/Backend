import { Router } from "express";
import Routes from './product.Routes.js'

const router=Router()

router.use('/product',Routes)

export default router;