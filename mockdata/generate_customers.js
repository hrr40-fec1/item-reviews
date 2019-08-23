const faker = require('faker');
const fs = require('fs')

function generateCustomers() {

  let customers = []

  for (let id = 1; id <= 50; id++) {
    let customerid = faker.random.number({ min: 1, max: 50 });
    let productid = faker.random.number({ min: 1, max: 100 });
    let purchased = faker.date.recent();
    let name = faker.internet.userName();

    customers.push({
      "customerId" : customerid,
      "productId": productid,
      "purchased": purchased,
      "name": name,
    });
  }
  return { "data": customers }
}

// let dataObj = generateCustomers();

// fs.writeFileSync('customers.json', JSON.stringify(dataObj, null, '\t'));

module.exports = generateCustomers;
