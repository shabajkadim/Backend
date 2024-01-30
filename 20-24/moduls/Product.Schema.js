import mongoose,{Schema} from "mongoose";

const ProductSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    prize:Number,
    image:[String]
})

export default mongoose.model('Product', ProductSchema)