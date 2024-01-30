import { Router } from "express";
import { Login, Register } from "../Controllers/user.controller.js";
import { CardProduct } from "../Controllers/card.controller.js";
import { Payment } from "../Controllers/payment.controller.js";


const router=Router();

router.get('/login',Login)

router.get('/register',Register)

router.get('/get-card-product',CardProduct)

router.get('/make-payment',Payment)

export default router;