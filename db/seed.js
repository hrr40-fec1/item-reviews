require('dotenv').config();
const db = require('./index.js');

const Reviews = require('../models/Reviews');
const genReviews = require('./faker/generate_reviews');

const seed = {
  reviews: genReviews(),
};


const dropCollections = () => {
  ['review', 'products', 'customers'].forEach((collection) => {
    db.dropCollection(collection, (err, result) => {
      if (err) console.log('error', err.message);
      if (result) console.log('results', result);
    });
  });
};
const insertSeedData = () => {
  Reviews.create(seed.reviews.data)
    .then(() => db.close())
    .catch((error) => console.log(error));
};
dropCollections();
insertSeedData();
