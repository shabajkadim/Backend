// import UserSchema from "../modals/User.Schema.js"
// import bcrypt from 'bcrypt'
// import  jwt  from "jsonwebtoken"

// export const Register= async (req,res)=>{
//     try{
//         const {name,email,password,confirmPassword}=req.body.userData
//         if(!name || !email || !password || !confirmPassword){
//             return res.send("All feild are required")
//         }
    
//         const isEmailisExist= await UserSchema.find({email:email})
    
//         if(isEmailisExist.length){
//             return res.send("email is exist")
//         }
//         if(password != confirmPassword){
//             return res.send("password and confirmpassword are not match")
//         }
    
//        const hashPassword=await bcrypt.hashSync(password,10)
//        console.log(hashPassword)
//     //    console.log(password)
    
//         const user = new UserSchema({
//             name:name,
//             email:email,
//             password:hashPassword
//         })
//         await user.save()
//         return res.json({message:"user store succsefully", success:true})
//     }catch(error){
//         // return res.status(500).json({error})
//         return res.status(500).json({success:false, error:error})
//     }
// }

// export const Login=async (req,res)=>{
//     try{
//         const {email,password}=req.body.loginData;
//         if(!email || !password){
//             return res.status(401).json({success:false ,message:"email and password both are required"})
//         }

//         const user=await UserSchema.findOne({email:email})
//         if(!user){
//             return res.status(404).json({success:false , message:"user not exist"})
//         }

//         const iscorrectpassword=await bcrypt.compare(password,user.password)

//         if(!iscorrectpassword){
//             return res.status(404).json({success:false,message:"password is incorrect"})
//         }

//         // const token=await jwt.sing({userId:user._id},process.env.JWT_SECRET) ;
//         // console.log(token,"token")
//         return res.status(200).json({success:true, message: "login successful",  user:{userId:user._id, name:user.name, email:user.email}})

//     }catch(error){
//         return res.status(500).json({success:false , error:error})
//     }
// }


import UserSchema from "../modals/User.Schema.js"
import bcrypt from 'bcrypt'

export const Register= async (req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body
        if(!name || !email || !password || !confirmPassword){
            return res.send("All feild are required")
        }
    
        const isEmailisExist= await UserSchema.find({email:email})
    
        if(isEmailisExist.length){
            return res.send("email is exist")
        }
        if(password != confirmPassword){
            return res.send("password and confirmpassword are not match")
        }
    
       const hashPassword=await bcrypt.hashSync(password,10)
       console.log(hashPassword)
    //    console.log(password)
    
        const user = new UserSchema({
            name:name,
            email:email,
            password:hashPassword
        })
        await user.save()
        res.send("user store succsefully")
    }catch(error){
        return res.status(500).json({error})
    }
}

export const Login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({success:false ,message:"email and password both are required"})
        }

        const user=await UserSchema.findOne({email:email})
        if(!user){
            return res.status(401).json({success:false , message:"user not exist"})
        }

        const iscorrectpassword=await bcrypt.compare(password,user.password)

        if(!iscorrectpassword){
            return res.status(401).json({success:false,message:"password is incorrect"})
        }

        return res.status(200).json({message:'Login successful' ,iscorrectpassword, success:true})

    }catch(error){
        return res.status(500).json({error})
    }
}
