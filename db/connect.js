const mongoose=require("mongoose");

uri="mongodb+srv://jaind3010:Z6ZwNQO8EIvFX1Km@restapi.mo41ppd.mongodb.net/RestApi?retryWrites=true&w=majority";

const connnectDb=()=>{

    console.log("connected db");

    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};
module.exports=connnectDb;