const faker = require('faker');

const generateReviews = () => {
  const reviews = [];

  for (let id = 1; id <= 400; id += 1) {
    const title = faker.commerce.productName();
    const review = faker.lorem.paragraph();
    const quality = faker.random.number({ min: 1, max: 5 });
    const sizing = faker.random.number({ min: 1, max: 5 });
    const style = faker.random.number({ min: 1, max: 5 });
    const value = faker.random.number({ min: 1, max: 5 });
    const comfort = faker.random.number({ min: 1, max: 5 });
    const customerName = faker.internet.userName();
    const purchaseDate = faker.date.recent();
    const productId = faker.random.number({ min: 1, max: 100 });
    const helpful = faker.random.boolean();
    const recommend = faker.random.boolean();
    const ratings = {
      quality,
      sizing,
      style,
      value,
      comfort,
    };

    reviews.push({
      title,
      review,
      ratings,
      customerName,
      purchaseDate,
      productId,
      helpful,
      recommend,
    });
  }
  return { data: reviews };
};

module.exports = generateReviews;
