const faker = require('faker');

const generateProducts = (count) => {
  const products = [];

  for (let id = 1; id <= count; id += 1) {
    const name = faker.commerce.productName();

    products.push({
      productId: id,
      name,
    });
  }
  return { data: products };
};

module.exports = generateProducts;
