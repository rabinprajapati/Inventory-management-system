const mongoose=require('mongoose');

const ProductSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    countInNumber:{
        type:Number,
        //required:true
    },
    featured:{
        type:Boolean,
        value:false
    },
    date:{
        type:String,
        default:Date.now
    }
})

const Product=mongoose.model('Product',ProductSchema);

module.exports=Product;