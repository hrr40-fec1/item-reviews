const mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

let CustomersSchema = mongoose.Schema({
  "customerId":  { type: Number, min: 1, max: 50  },
  "productId":  { type: Number, min: 1, max: 100  },
  "purchased": Date,
  "name": String,
});


module.exports = mongoose.model('Customers', CustomersSchema);
