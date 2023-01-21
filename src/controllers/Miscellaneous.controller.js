const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const MiscellaneousController=catchAsync(async(req,res)=>{
    const TotalData=await(await ModelSales.find()).length
    const NbrMales=await(await ModelSales.find({
        Gender:'Male'
    })).length
    const NbrFemales=await(await ModelSales.find({
        Gender:'Female'
    })).length
    const RateFemales=(NbrFemales/TotalData)*100
    const RateMales=(NbrMales/TotalData)*100

    const ResultsAvgRating=await ModelSales.aggregate([
        {
            $addFields:{
                convertedRating:{
                    $toDecimal: "$Rating"
                }
            },
        },
        {
            $group:{
                _id:null,
                moyenne:{
                    $avg:'$convertedRating'
                }
            }
        }
    ])

   let avg=Number(ResultsAvgRating[0].moyenne)
   
   return res.json(
        {"TotalCostumers":TotalData,
        "RateFemales":RateFemales,
        "RateMales":RateMales,
        "avg":avg
   }
    )
})

module.exports=MiscellaneousController