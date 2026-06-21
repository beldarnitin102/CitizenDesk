const express = require("express")
const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 4000

const connectDB = require("./config/db")
connectDB()

app.listen(PORT, () => {
  console.log(`The app is running on the port ${PORT}`)
})