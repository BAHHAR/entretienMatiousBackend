const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const MiscellaneousController=catchAsync(async(req,res)=>{
    // Récupération du nombre total de données
    const TotalData=await(await ModelSales.find()).length
    // Récupération du nombre de clients de genre masculin  
    const NbrMales=await(await ModelSales.find({
        Gender:'Male'
    })).length
    // Récupération du nombre de clients de genre féminin
    const NbrFemales=await(await ModelSales.find({
        Gender:'Female'
    })).length
     // Calcul du pourcentage de clients de genre féminin
    const RateFemales=(NbrFemales/TotalData)*100
     // Calcul du pourcentage de clients de genre masculin
    const RateMales=(NbrMales/TotalData)*100

    // Utilisation de la méthode aggregate de mongoose pour calculer la moyenne de la note de rating
    const ResultsAvgRating=await ModelSales.aggregate([
        {
            //convertir la colonne Rating de string en decimal 
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