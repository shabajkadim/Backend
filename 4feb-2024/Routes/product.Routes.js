import { Router } from "express";
import { AddProduct, GetSingleProduct, ReadProduct } from "../Controller/Product.Controller.js";


const router=Router()

router.post('/add-product', AddProduct)
router.get('/read-product',ReadProduct)
router.post('/get-single-product',GetSingleProduct)

export default router;