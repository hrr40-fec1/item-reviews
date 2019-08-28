const mongoose = require('mongoose');

const HOST = process.env.DB_HOST;

const mongoUri = `mongodb://${HOST}:27017/reviews`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
