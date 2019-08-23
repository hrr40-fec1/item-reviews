const mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;


let ProductsSchema = mongoose.Schema({
  "productId":  { type: Number, min: 1, max: 100 , unique: true },
  "name": String,
});

module.exports= mongoose.model('Products', ProductsSchema);
