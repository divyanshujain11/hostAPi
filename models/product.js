const mongoose=require("mongoose");

const product_schema=new mongoose.Schema({    
    intensity:{
        type:Number,
    },
    likelihood:{
        type:Number,
    },
    pestle:{
        type:String,
    },
    country:{
        type:String,
    },
    sector:{
        type:String,
    },
});
module.exports=mongoose.model("product",product_schema);