import { Router } from "express";
import {  Login, Register, getCurrentUser } from "../Controller/AuthController.js";


const router=Router();

router.post('/register',Register)

router.post('/login',Login)

router.post('/get-current-user',getCurrentUser)



export default router;