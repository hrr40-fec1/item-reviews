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

let dataObj = generateProducts();

fs.writeFileSync('products.json', JSON.stringify(dataObj, null, '\t'));