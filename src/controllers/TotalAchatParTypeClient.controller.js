const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const TotalAchatParTypeClientController=catchAsync(async(req,res)=>{
    const data=await ModelSales.aggregate([
        {
            $group:{
                _id:{
                    TypeClient:'$Customer type',
                    Gender:'$Gender',
                },
                total:{
                    $sum:1
                }
            },
            
        },
    ])
    let results=[]
    data.map((value)=>results.push({name:value._id.TypeClient,gender:value._id.Gender,total:value.total}))

    
    return res.send(results)
});

module.exports=TotalAchatParTypeClientController