const mongoose = require("mongoose")
const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

const port = process.env.PORT
const url = process.env.URL

mongoose.connect(url).then(()=>{
  console.log("db connected");
})








app.use("/",require("../router/userrouter"))



app.listen(port,()=>{
  console.log(`server running on port no ${port}`);
})



