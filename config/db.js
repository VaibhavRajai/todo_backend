const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

module.exports = connect;
