import productSchema from "../mudule/productSchema.js";

export const addProduct= async(req,res)=>{
    try{
        const{title,image,price,category,quantity}=req.body;
        if(!title || !image|| !price || !category || !quantity){
            return res.send("All feilds are require ")
        }
        const product=new productSchema({
            title:title,
            image:image,
            price:price,
            category:category,
            quantity:quantity
        })
        await product.save()
        return res.status(200).json({success:true, message:"Data-add sucessFull"})
    }catch(error){

    }
}