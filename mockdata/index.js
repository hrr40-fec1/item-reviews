const fs = require('fs');

const genReviews = require('./generate_reviews');
const genProducts = require('./generate_products');
const genCustomers = require('./generate_customers');

const customerData = genCustomers();
const reviewData = genReviews();
const productData = genProducts();

fs.writeFileSync('./tests/data/customers.json', JSON.stringify(customerData, null, '\t'));
fs.writeFileSync('./tests/data/reviews.json', JSON.stringify(reviewData, null, '\t'));
fs.writeFileSync('./tests/data/products.json', JSON.stringify(productData, null, '\t'));
