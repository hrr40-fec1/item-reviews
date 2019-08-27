const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CustomersSchema = mongoose.Schema({
  customerId: { type: Number, min: 1, max: 50 },
  purchased: Date,
  name: String,
});

module.exports = mongoose.model('Customers', CustomersSchema);
