const connnectDb=require("./db/connect");
const product=require("./models/product");
const product_json=require("./product.json");

const start = async()=>{
    try{
        await connnectDb();
        await product.deleteMany();
        await product.create(product_json);
        console.log("sucess");
        
    }catch(error){
        console.log(error);
    }
};


start();