const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const parser = csv();


// Chargement des variables d'environnement requises
require('mandatoryenv').load([
    'DB_URL'
]);

// Récupération de la variable d'environnement DB_URL
const {
    DB_URL
} = process.env;

// Connexion à la base de données via Mongoose
mongoose.connect(DB_URL, { useNewUrlParser: true });

// Création d'un modèle pour la collection de données
const ModelSales = mongoose.model('ModelSales', new mongoose.Schema({
    "Invoice ID":String,
    "Branch":String,
    "City":String,
    "Customer type":String,
    "Gender":String,
    "Product line":String,
    "Unit price":String,
    "Quantity":String,
    "Tax 5%":String,
    "Total":String,
    "Date":String,
    "Time":String,
    "Payment":String,
    "cogs":String,
    "gross margin percentage":String,
    "gross income":String,
    "Rating":String,
}));

// Récupération du chemin du fichier CSV à partir des arguments de ligne de commande
const FilePath=process.argv[2];

// Tableau pour stocker les données du fichier CSV
let results=[]

// Lecture du fichier CSV en utilisant fs et csv-parser
fs.createReadStream(FilePath)
      .pipe(parser)
      .on('data', (data) => results.push(data))
      .on('end',async()=>{
        //Insertion des données dans la base de données en utilisant la méthode insertMany de Mongoose
        await ModelSales.insertMany(results);
        console.log('Toutes les données ont été insérées!');
    });







