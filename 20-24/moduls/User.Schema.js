// name, email,password,number
// {
//     name:String,
//     email:String,
//     password:String,
//     number:Number
// }

import mongoose , {Schema} from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        require:true},
    email:String,
    password:String,
    number:Number,
    fvrtFroute:[String]
})

export default mongoose.model('user',userSchema)