const CityParTypeProduit = require('../controllers/CityParTypeProduit.js');
const GrossVolumeParProductController = require('../controllers/GrossVolumeParProduct.controller.js');
const MiscellaneousController = require('../controllers/Miscellaneous.controller.js');
const MoyenRatingParSexeController = require('../controllers/MoyenRatingParSexe.js');
const TotalAchatParTypeClientController = require('../controllers/TotalAchatParTypeClient.controller.js');
const router = require('express').Router();


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
    .route("/CityParTypeProduit")
    .get(CityParTypeProduit)

// You can require and use your routes here ;)


module.exports = router;