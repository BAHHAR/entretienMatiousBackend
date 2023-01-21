const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const MoyenRatingParSexeController=catchAsync(async(req,res)=>{
    const data=await ModelSales.aggregate([
        {
            $addFields:{
                convertedRating:{
                    $toDecimal: "$Rating"
                }
            },
        },
        {
           
            $group:{
                _id:'$Gender',
                moyenne:{
                    $avg:'$convertedRating'
                }
            }
        }
    ])

    let results=[];
    data.map((value)=>results.push({gender:value._id,avg:Number(value.moyenne)}))

    return res.send(results)
})


module.exports=MoyenRatingParSexeController;