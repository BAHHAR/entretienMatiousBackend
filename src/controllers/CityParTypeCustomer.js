const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const CityParTypeCustomer=catchAsync(async(req,res)=>{
    const data=await ModelSales.aggregate([
        {
            $group:{
                _id:{
                    City:'$City',
                    Product:'$Product line'
                },
                total:{
                    $sum:1
                }
            },
            
        }
    ])
    let results=[]
    data.map((value)=>results.push({city:value._id.City,product:value._id.Product,total:value.total}))
    res.json(results)
})

module.exports=CityParTypeCustomer