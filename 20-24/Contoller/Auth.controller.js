import UserSchema from "../moduls/User.Schema.js"

export const Login=(req,res)=>{
    return res.send("Login page")
}

export const Register=(req,res)=>{
    return res.send("Register page")
}

export const getOwnData=(req,res)=>{
    //user must login to access this controller
    //mongodb connection to return user data
    const {userId}=req.body;
    
    return res.send(userId)
}

