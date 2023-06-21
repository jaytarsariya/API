const router = require('express').Router();
const bcrypt = require('bcryptjs');
const user = require('../models/schema');

//  ****************** REGISTRATION *****************************

router.post('/registration', async (req, resp) => {
  try {
    const data = await new user(req.body);
    const save = await data.save();

    if(save)
    {
      {
        const success = {
          code:"1",
          massage:"Registration Successfull",
          details: {data}
          
        }
        resp.send(success)
    }
   
  }else{
    resp.send("already register !!")
  }
} catch (err) {

  const error = 
  {
    code: '0',
    message: 'invalid details',
    data: {}
  };

  resp.send(error);
  }
});

   







//  *************************** LOGIN **********************************************

router.post('/login', async (req, resp) => {
  try {
    const data = await user.findOne({ email: req.body.email });
    console.log('hello', data);
    const isMatch = await bcrypt.compare(req.body.pass, data.pass);

    if (isMatch) 
    {
      const success = {
        code:"1",
        massage:"Success",
        details: {data}
        
      }
      resp.send(success)
      // resp.send(data)
    }
     else {
      const error = 
      {
        code: '0',
        message: 'invalid details',
        data: {}
      };

      resp.send(error);

      
    }
    // resp.send("invalid Users !!!")
  } catch (err) {
    const error = 
      {
        code: '0',
        message: 'invalid details',
        data: {}
      };

      resp.send(error);
  }
});



 router.get("/view", async (req,resp)=>{
     try {
      const data =await user.find()

      resp.send(data)
     } catch (err) {
      
      const error = 
      {
        code: '0',
        message: 'invalid details',
        data: {}
      };

      resp.send(error);

     }
   

 })












module.exports = router;
