require('dotenv').config();
const db = require('./index.js');

const Reviews = require('../models/Reviews');
const Customers = require('../models/Customers');
const Products = require('../models/Products');

const genReviews = require('../__mockdata__/generate_reviews');
const genProducts = require('../__mockdata__/generate_products');
const genCustomers = require('../__mockdata__/generate_customers');

const seeds = {
  Reviews: genReviews(),
  Customers: genCustomers(),
  Products: genProducts(),
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
  Reviews.create(seeds.Reviews.data)
    .then(() => Customers.create(seeds.Customers.data))
    .then(() => Products.create(seeds.Products.data))
    .then(() => db.close())
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};
dropCollections();
insertSeedData();
