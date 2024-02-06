import { Router } from "express";
import { AddProduct, getProduct} from "../Controller/ProductController.js";

const router = Router()

router.post('/add-product',AddProduct)

router.get('/get-product',getProduct)


export default router;