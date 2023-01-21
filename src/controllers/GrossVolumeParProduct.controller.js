const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const GrossVolumeParProductController=catchAsync(async(req,res)=>{
    const ProductsLine=await ModelSales.aggregate([
        {   
            $group:{
                _id:'$Product line',
                total:{
                    $sum:1
                }
            },
            
        },
    ])
    res.send(ProductsLine)
})

module.exports=GrossVolumeParProductController