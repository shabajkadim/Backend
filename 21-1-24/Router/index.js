import { Router } from "express";
import  AuthRouter from './AuthRouter.js'

const router=Router();

router.use('/auth',AuthRouter)

export default router;