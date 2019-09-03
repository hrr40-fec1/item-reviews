
# Technology recommendations

**Most of the tools listed here will _not_ be needed or used in this project**. Use this list as a fun/handy guide on what technologies choices exist and might be considered for a new project in a given category.

## General Project stuff

### Dependencies

*   yarn
*   greenkeeper

### Version

*   ES6 on both server-side and client-side
*   Transpile with Babel (via Webpack)

### Linting

*   use eslint with the hackrector linter config that comes with your repo

## Front-end

### Asset compilation + loading

*   Webpack
*   Webpack-dev

### Front-End MVC:

*   ReactJS
*   Vue

### Data store

*   Redux
*   GraphQL

### CSS Frameworks

*   Bootstrap
*   Sass

## Server

### MVC

*   Koa
*   ExpressJS

### Auth

*   Passport for FB + Google + Github OAuth

### Templating

*   Pug (formerly Jade)

## Database

### Primary DB

*   Cassandra
*   Elastic Search
*   Postgres + Knex
*   MongoDB + Mongoose

### Caching and queuing

*   Background jobs / work queue: Kue
*   Redis for caching + session store + work queue
*   memcache

## Testing

### Frameworks and Libraries

*   [Jest](https://facebook.github.io/jest/)
*   [AVA](https://github.com/avajs/ava)
*   [Mocha ](https://mochajs.org/)+ [chai](http://chaijs.com/)
*   [Enzyme ](https://github.com/airbnb/enzyme)(for React)
*   [Supertest ](https://github.com/visionmedia/supertest)(http requests)

### Code coverage

*   [Jest](https://facebook.github.io/jest/)
*   [Instanbul+Coveralls](http://codeheaven.io/javascript-code-coverage-with-instanbul-and-coveralls/)

### End-to-end testing

*   [Cypress.io](https://www.cypress.io/)
*   [NightwatchJs](http://nightwatchjs.org/)
*   [Puppeteer ](https://github.com/GoogleChrome/puppeteer)(testing with [Jest ](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/))
*   [Navalia ](https://github.com/joelgriffith/navalia)and [others](https://medium.com/@kensoh/chromeless-chrominator-chromy-navalia-lambdium-ghostjs-autogcd-ef34bcd26907)

### Cloud testing

*   [Sauce Labs](https://saucelabs.com/)
*   [Cross Browser Resting](https://crossbrowsertesting.com/)

## Deployment

### Containers and Swarms

*   DockerHub
*   DockerCloud

### One-click Deploy

*   AWS Elastic Beanstalk

### Continuous integration

*   CircleCI
*   TravisCI

## Performance and Analytics

*   New Relic
*   Mix Panel

## Misc Stuff

### Email

*   Mailgun
*   Sendgrid

### File Uploads

*   Filepicker.io

### Transcoding

*   Zencoder

### Static asset hosting

*   AWS S3

### CDN

*   AWS Cloudfront

### Notification

*   AWS SNS
*   Twilio
