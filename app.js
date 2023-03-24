const express= require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const product_route=require("./routes/product");
const connnectDb=require("./db/connect");



app.use("/api/product", product_route);

app.get("/",(req,res)=>{
    res.send("hi , i am live");
});
const start=async()=>{
    try{
        await connnectDb();
        app.listen(PORT,()=>{
            console.log(`${PORT} yes , i am connectd`);
        }); 
    }catch(error){
        console.log(error);
    }
};
start();