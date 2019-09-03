const fs = require('fs');
const genReviews = require('./generate_reviews');

const reviewData = genReviews(10);

fs.writeFileSync('reviews.json', JSON.stringify(reviewData, null, '\t'));
