const mongoose = require("mongoose")


const usershcema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  rollno:{
    type:String,
    require:true,

  },
  email:{
    type:String,
    require:true,
    unique:true
  }
})



module.exports = new mongoose.model("Student",usershcema)