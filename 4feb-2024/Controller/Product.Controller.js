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

export const ReadProduct = async(req,res)=>{
    try{
        const products = await productSchema.find({})
        return res.status(200).json({success:true, products:products})
    }catch(error){
        return res.status(500).json({success:false, error})
    }


}

export const GetSingleProduct= async(req,res)=>{
    try{
        const {productId} =req.body

        const product = await productSchema.findById(productId)

        if(product){
            return res.status(200).json({success:true, product:product})
        }else{
            return res.status(401).json({success:false, message:"product not found"})
        }
    }catch(error){
        return res.status(500).json({success:false, error})

    }
}