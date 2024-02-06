import mongoose ,{Schema} from "mongoose";

const productSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }

});

export default mongoose.model("practice",productSchema)