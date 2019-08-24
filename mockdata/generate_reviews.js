const faker = require('faker');

const generateReviews = () => {
  const reviews = [];

  for (let id = 1; id <= 400; id += 1) {
    const title = faker.commerce.productName();
    const review = faker.lorem.paragraph();
    const rating = faker.random.number({ min: 1, max: 5 });
    const quality = faker.random.number({ min: 1, max: 5 });
    const sizing = faker.random.number({ min: 1, max: 5 });
    const style = faker.random.number({ min: 1, max: 5 });
    const value = faker.random.number({ min: 1, max: 5 });
    const customerid = faker.random.number({ min: 1, max: 50 });
    const productid = faker.random.number({ min: 1, max: 100 });
    const helpful = faker.random.boolean();
    const recommend = faker.random.boolean();


    reviews.push({
      title,
      review,
      rating,
      quality,
      sizing,
      style,
      value,
      customerId: customerid,
      productId: productid,
      helpful,
      recommend,
    });
  }
  return { data: reviews };
};

module.exports = generateReviews;
