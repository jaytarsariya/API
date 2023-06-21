const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({

  name:{
    type:String
  },
  email:{
    type:String,
    unique:true,
    required: true
  },
  phone:{
    type:Number,
    unique:true,
    required: true
  },
  pass:{
    type:String
  },
  Tokens : [{
    token : {
        type : String
    }}]
})


userSchema.pre("save", async function(){
try {
  this.pass = await bcrypt.hash(this.pass,10)
} catch (error) {
  console.log(error);
}
})





module.exports = new mongoose.model("USER",userSchema)