import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'
import userSchema from "../mudule/UserSchema.js";


export const Register = async(req,res)=>{
    // return res.send("register page..")
    try{
        const {name,email,password,confirmPassword}=req.body.userData;

    if(!name || !email || ! password || !confirmPassword){
        return res.send("all fild are required")   
    }

    if(password != confirmPassword){
        return res.send("please check passsword")
    }

    const isEmailExist=await userSchema.find({email:email})
    if(isEmailExist.length){
        return res.send("email is exist")
    }
    
    const hashPassword=await bcrypt.hashSync(password,10)
    //    console.log(hashPassword)


    const user=new userSchema({
        name:name,
        email:email,
        password:hashPassword
    })
    //    console.log(hashPassword)

    await user.save()

    return res.status(200).json({success:true,message:"Registration successful"})
    }catch(error){
        return res.status(500).json({error})
    }
}

export const Login=async (req,res)=>{
    try{
        const {email,password}=req.body.loginData;
        // const {email,password}=req.body;

        if(!email || !password){
            return res.status(401).json({success:false ,message:"email and password both are required"})
        }

        const user=await userSchema.findOne({email:email})
        if(!user){
            return res.status(401).json({success:false , message:"user not exist"})
        }

        const iscorrectpassword=await bcrypt.compare(password,user.password)

        if(!iscorrectpassword){
            return res.status(404).json({success:false,message:"password is incorrect"})
        }

        const token= await jwt.sign({userId:user._id},process.env.JWT_SECRET, {expiresIn:12000}) 
        console.log(token, "token")

        return res.status(200).json({ success:true ,message:'Login successful', token:token, user:{ userId:user._id ,name:user.name, email:user.email}})

    }catch(error){
        return res.status(500).json({error})
    }
}

