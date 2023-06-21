const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

const port = process.env.PORT
const url = process.env.DB_URL

mongoose.connect(url).then(()=>{
  console.log("db connected");
})
app.use(express.json())

const router = require("../router/userrouter")
app.use("/", router)










app.listen(port, ()=>{
  console.log(`server running on port no ${port}`);
})