import { Router } from "express";
import { addProduct } from "../controller/productController.js";

const router=Router()

router.post('/add-product',addProduct)

export default router;