const fs = require('fs');
const genReviews = require('./generate_reviews');

const reviewData = genReviews();

fs.writeFileSync('./reviews.json', JSON.stringify(reviewData, null, '\t'));
