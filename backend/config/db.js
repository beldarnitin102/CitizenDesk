const mongoose = require("mongoose");
require("dotenv").config();

connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);

    console.log("Database connected succesffuly");
  } catch (err) {
    console.log(err);
    console.log("error in database");
  }
};

module.exports = connectDB;
