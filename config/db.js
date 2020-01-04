const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log('MongoDB Connected MoFO...');
  } catch (err) {
    console.log(err.message);
    // when the shit hits the fan next line below exit
    processh.exit(1);
  }
};

module.exports = connectDB;
