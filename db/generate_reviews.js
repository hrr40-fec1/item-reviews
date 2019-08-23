const faker = require('faker');
const fs = require('fs')

function generateReviews() {

  let reviews = []

  for (let id = 1; id <= 400; id++) {

    let title = faker.commerce.productName();
    let review = faker.lorem.paragraph();
    let rating = faker.random.number({ min: 1, max: 5 });
    let quality = faker.random.number({ min: 1, max: 5 });
    let sizing = faker.random.number({ min: 1, max: 5 });
    let style = faker.random.number({ min: 1, max: 5 });
    let value = faker.random.number({ min: 1, max: 5 });
    let customerid = faker.random.number({ min: 1, max: 50 });
    let productid = faker.random.number({ min: 1, max: 100 });
    let helpful = faker.random.boolean();
    let recommend = faker.random.boolean();


    reviews.push({
      "title": title,
      "review": review,
      "rating": rating,
      "quality": quality,
      "sizing": sizing,
      "style": style,
      "value": value,
      "customerId": customerid,
      "productId": productid,
      "helpful": helpful,
      "recommend": recommend
    });
  }
  return { "data": reviews }
}

let dataObj = generateReviews();

fs.writeFileSync('reviews.json', JSON.stringify(dataObj, null, '\t'));