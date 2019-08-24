const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewsSchema = mongoose.Schema({
  title: String,
  review: String,
  rating: Number,
  quality: Number,
  sizing: Number,
  style: Number,
  value: Number,
  customerId: { type: Number, min: 1, max: 50 },
  productId: { type: Number, min: 1, max: 100 },
  helpful: Boolean,
  recommend: Boolean,
});

module.exports = mongoose.model('Reviews', ReviewsSchema);
