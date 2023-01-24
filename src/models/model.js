const db = require("./database");

// Création d'un schéma pour le modèle ModelSales
const schema=new db.Schema({
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

});
// Création du modèle ModelSales en utilisant le schéma
const ModelSales=db.model('ModelSales',schema);

module.exports=ModelSales;