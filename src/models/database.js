
const mongoose = require('mongoose');
// Désactivation de la validation stricte des requêtes pour mongoose
mongoose.set('strictQuery', false);

// Chargement des variables d'environnement requises
require('mandatoryenv').load([
    'DB_URL'
]);
// Récupération de la variable d'environnement DB_URL
const {
    DB_URL
} = process.env;

// Connexion à la base de données via Mongoose
const db=mongoose

// Exportation de la connexion à la base de données pour l'utiliser dans les autres fichiers
db.connect(DB_URL,{useNewUrlParser: true});

module.exports=db