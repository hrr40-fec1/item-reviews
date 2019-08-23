const faker = require('faker');
const fs = require('fs')

function generateProducts() {

  let products = []

  for (let id=1; id <= 100; id++) {

    let name = faker.commerce.productName();

    products.push({
        "productId": id,
        "name": name,
    });
  }
  return { "data": products }
}

module.exports = generateProducts;