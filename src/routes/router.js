const CityParTypeCustomer = require('../controllers/CityParTypeCustomer.js');
const GrossVolumeParProductController = require('../controllers/GrossVolumeParProduct.controller.js');
const MiscellaneousController = require('../controllers/miscellaneous.controller.js');
const MoyenRatingParSexeController = require('../controllers/MoyenRatingParSexe.js');
const TotalAchatParTypeClientController = require('../controllers/TotalAchatParTypeClient.controller.js');
const  UploadFile  = require('../controllers/UploadFile.controller.js');
const upload = require('../util/config.js');
const router = require('express').Router();

router
    .route("/UploadFile")
    .post(upload.single("file"),
        UploadFile)

router
    .route("/ProductsLine")
    .get(GrossVolumeParProductController)

router
    .route("/TotalAchatParType")
    .get(TotalAchatParTypeClientController)

router
    .route("/MoyenneRatingParGender")
    .get(MoyenRatingParSexeController)

router  
    .route("/Miscellaneous")
    .get(MiscellaneousController)

router
    .route("/CityParTypeCustomer")
    .get(CityParTypeCustomer)

// You can require and use your routes here ;)


module.exports = router;