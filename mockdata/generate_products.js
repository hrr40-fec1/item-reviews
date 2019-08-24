const faker = require('faker');

const generateProducts = () => {
  const products = [];

  for (let id = 1; id <= 100; id += 1) {
    const name = faker.commerce.productName();

    products.push({
      productId: id,
      name,
    });
  }
  return { data: products };
};

module.exports = generateProducts;
