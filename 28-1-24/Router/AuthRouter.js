import { Router } from "express";
import {  Login, Register, getCurrentUser, getProfileData } from "../Controller/AuthController.js";
import { isJwtExpire } from "../middlerware/jwtmiddleware.js";


const router=Router();

router.post('/register',Register)

router.post('/login',Login)

router.post('/get-current-user',getCurrentUser)

router.post('/get-profile-data', isJwtExpire,getProfileData)



export default router;