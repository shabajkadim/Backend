import productSchema from "../modals/product.Schema.js";


export const AddProduct = async(req,res)=>{
    // console.log("jhgf")
    try{
        // console.log("873146")
    const {name,image,price,category,quantity}=req.body.productData; 
    // const {name,image,price,category,quantity}=req.body;

    if(!name || !image || !price || !category || !quantity){
        return res.send("all fields are required ")
    }

    const product = new productSchema({
        name:name,
        image:image,
        price:price,
        category:category,
        quantity:quantity
    })
    await product.save()
    return res.status(200).json({message:"product Store successfully"})
  }catch(error){
    return res.status(500).json({error})
  }


} 

export const getProduct= async(req,res)=>{
  try {
    let AllProductsFromDataBase=await productSchema.find()
    return res.json(AllProductsFromDataBase)
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}