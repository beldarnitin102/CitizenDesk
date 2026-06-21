const express = require("express")
const app = express()

require("dotenv").config()

const errorHandler = require(
  "./middlewares/error.middleware"
);
app.use(errorHandler);

const PORT = process.env.PORT || 4000

const connectDB = require("./config/database")
connectDB()

app.listen(PORT, () => {
  console.log(`The app is running on the port ${PORT}`)
})