const router = require('express').Router();
const student = require('../models/user');

// ******************* student list **************
router.get('/student', async (req, resp) => {
  try {
    const data = await student.find();
    resp.send(data);
  } catch (error) {
    console.log(error);
  }
});
//  ************************ add student *************
router.post('/create', async (req, resp) => {
  try {
    const data = student(req.body);
    await data.save();
    resp.send(data);
  } catch (error) {
    console.log(error);
  }
});

//  ****************** update student *************
router.put('/update/:_id', async (req, resp) => {
  try {
    const data = await student.findByIdAndUpdate(req.params._id, req.body);
    resp.send(data);
    console.log(data, 'update');
  } catch (error) {
    console.log(error);
  }
});

// ************** delete student ********
router.delete('/delete/:_id', async (req, resp) => {
  const data = await student.findByIdAndDelete(req.params._id);
  console.log(data);
  resp.send(data);
  resp.send(data);
});

// **************** search using regex *********

router.get('/search/:key', async (req, resp) => {
  console.log(req.params.key);

  const data = await student.find({
    $or: [
      { name: { $regex: req.params.key } },
      { rollno: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
    ],
  });

  resp.send(data);
});

module.exports = router;
