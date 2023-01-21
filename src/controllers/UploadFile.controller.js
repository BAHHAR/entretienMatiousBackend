
const catchAsync=require('../util/catchAsync')
const fs = require('fs');
const csv = require('csv-parser');
const ModelSales = require('../models/model');

const parser = csv();



const UploadFile=catchAsync(async(req,res)=>{
    const results = [];
   
   await fs.createReadStream(req.file.path)
      .pipe(parser)
      .on('data', (data) => results.push(data))
      .on('end',async()=>{
            await ModelSales.insertMany(results);
      });
      res.json({
            'code':200,
            'message':"data inserted with successful"
      })
})

module.exports=UploadFile