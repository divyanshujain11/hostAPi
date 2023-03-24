const product = require("../models/product");

const getAllProducts=async(req,res)=>{
    const { intensity,country,sector,likelihood}= req.query;
    const queryObject={};
    
    if(intensity){
        queryObject.intensity=intensity;
    }
     if(likelihood){
        queryObject.likelihood=likelihood;
    }    
    if(country){
        queryObject.country={$regex:country,$options:"i"};
    }
    if(sector){
        queryObject.sector=sector;
    }
    let apiData=product.find( queryObject );
    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }
    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||4;

    let skip=(page-1)*limit;

    apiData=apiData.skip(skip).limit(limit);
    
    console.log(queryObject);


    const myData=await apiData;
    res.status(200).json({myData,nbHits:myData.length});
   
};

const getAllProductsTesting=async(req,res)=>{

    const myData=await product.find(req.query);
    console.log(myData);
    res.status(200).json({myData})
};

module.exports={getAllProducts,getAllProductsTesting};