const mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

let ReviewsSchema = mongoose.Schema({
  "title": String,
  "review": String,
  "rating": Number,
  "quality": Number,
  "sizing": Number,
  "style": Number,
  "value": Number,
  "customerId":  { type: Number, min: 1, max: 50 },
  "productId":  { type: Number, min: 1, max: 100 },
  "helpful": Boolean,
  "recommend": Boolean
});

module.exports = mongoose.model('Reviews', ReviewsSchema);
