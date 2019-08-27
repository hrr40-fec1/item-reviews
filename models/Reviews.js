const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewsSchema = mongoose.Schema({
  title: String,
  review: String,
  ratings: {
    quality: { type: Number },
    sizing: { type: Number },
    style: { type: Number },
    value: { type: Number },
  },
  customerName: { type: String },
  purchaseDate: Date,
  productId: { type: Number, min: 1, max: 100 },
  helpful: Boolean,
  recommend: Boolean,
});

module.exports = mongoose.model('Reviews', ReviewsSchema);
