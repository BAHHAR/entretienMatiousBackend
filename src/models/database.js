
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('mandatoryenv').load([
    'DB_URL'
]);
const {
    DB_URL
} = process.env;

const db=mongoose

db.connect(DB_URL,{useNewUrlParser: true});

module.exports=db