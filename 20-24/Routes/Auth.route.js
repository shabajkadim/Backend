import { Router } from "express";
import { Login, Register, getOwnData } from "../Contoller/Auth.controller.js";
import { checkId } from "../middleware/globle.middleware.js";

const router=Router();

router.get('/login',Login)
router.get('/register',Register)
router.post('/get-own-data',checkId,getOwnData)

export default router;