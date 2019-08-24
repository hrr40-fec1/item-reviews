const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ProductsSchema = mongoose.Schema({
  productId: {
    type: Number, min: 1, max: 100, unique: true,
  },
  name: String,
});

module.exports = mongoose.model('Products', ProductsSchema);
