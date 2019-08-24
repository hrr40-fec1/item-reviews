const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/reviews';

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// drop database if it exists?
module.exports = db;
