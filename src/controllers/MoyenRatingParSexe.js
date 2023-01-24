const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const MoyenRatingParSexeController=catchAsync(async(req,res)=>{
    // Utilisation de la méthode aggregate de mongoose pour calculer la Moyenne de rating par sexe
    const data=await ModelSales.aggregate([
        {
            $addFields:{
                convertedRating:{
                    $toDecimal: "$Rating"
                }
            },
        },
        {
           //regrouper les donnees par sexe
            $group:{
                _id:'$Gender',
                moyenne:{
                    $avg:'$convertedRating' // calculer la moyenne avec l'expression $avg
                }
            }
        }
    ])

    let results=[];
    data.map((value)=>results.push({gender:value._id,avg:Number(value.moyenne)}))

    return res.send(results)
})


module.exports=MoyenRatingParSexeController;