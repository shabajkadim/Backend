import productSchema from "../modul/product.Schema.js";

export const AddProduct= async(req,res)=>{

    try{
    // const {title,image,price,category,quantity}=req.body;
    const {title,image,price,category,quantity}=req.body.data;
    if(!title || !image || !price || !category || !quantity){
        return res.send("all field are require")
    }

    const product=new productSchema({
        title:title,
        image:image,
        price:price,
        category:category,
        quantity:quantity
    })
    await product.save()
    return res.json({message:"product Store successFully" ,success:true})
}catch(error){
    return res.status(500).json({error})
}

} 