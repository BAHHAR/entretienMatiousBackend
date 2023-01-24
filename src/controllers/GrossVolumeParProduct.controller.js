const catchAsync=require('../util/catchAsync')
const ModelSales = require('../models/model');


const GrossVolumeParProductController=catchAsync(async(req,res)=>{
    // Utilisation de la méthode aggregate de mongoose pour grouper les données par Revenue brut ( Gross volume ) et  catégorie ( Product Line )
    const ProductsLine=await ModelSales.aggregate([
        {   
            $group:{
                _id:'$Product line',
                // sommez les données de la colonne Revenue brut
                total:{
                    $sum:1
                }
            },
            
        },
    ])
    
    res.send(ProductsLine)
})

module.exports=GrossVolumeParProductController