const db = require('./index.js');

const Reviews = require('../models/Reviews');
const Customers = require('../models/Customers');
const Products = require('../models/Products');

const genReviews = require('../mockdata/generate_reviews.js');
const genProducts = require('../mockdata/generate_products.js');
const genCustomers = require('../mockdata/generate_customers.js');

const seeds = {
  Reviews: genReviews(),
  Customers: genCustomers(),
  Products: genProducts()
}
const insertSeedData = function () {
  Reviews.create(seeds.Reviews.data)
    .then(() => Customers.create(seeds.Customers.data))
    .then(() => Products.create(seeds.Products.data))
    .then(() => db.close())
    .catch((error) => console.log(error))
};

insertSeedData();
