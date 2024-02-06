import jwt from 'jsonwebtoken' 

export const isJwtExpire=async (req,res,next)=>{
    try{
        const {token}=req.body;

        if(!token){
            return res.status(404).json({success:false, message:"token is required"})
        }

        const decodedData=await jwt.verify(token, process.env.JWT_SECRET)

        const getCurrentTime= await Math.floor(Date.now() / 1000);
        console.log( decodedData?.exp,getCurrentTime, "getCurrentTime")
        if(decodedData?.exp <= getCurrentTime ){
            return res.status(404).json({success:false, tokenExpire:true,message:"token is expired please login again"})
        }
        next()
    }catch(error){
    return res.status(500).json({success:false, message:"token is expire"})
}
}




//tokenexpire:-token expire true ager backeend main aa jata hain to hum user ko logout kar denge . 