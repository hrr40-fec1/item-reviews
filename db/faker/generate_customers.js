const faker = require('faker');

const generateCustomers = (count) => {
  const customers = [];

  for (let id = 1; id <= count; id += 1) {
    const customerid = faker.random.number({ min: 1, max: 50 });
    const productid = faker.random.number({ min: 1, max: 100 });
    const purchased = faker.date.recent();
    const name = faker.internet.userName();

    customers.push({
      customerId: customerid,
      productId: productid,
      purchased,
      name,
    });
  }
  return { data: customers };
};

module.exports = generateCustomers;
