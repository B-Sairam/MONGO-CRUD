var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const {Email,Student} = require('../Schema');
let {mongodb,MongoClient,dbURL} = require('../dbConfig')


mongoose.connect(dbURL)

router.get('/', async(req,res)=>{
    const emails = await Student.find();
    res.send(emails)
})


router.post('/email',async(req,res)=>{
  try{
    const email= await Student.create(req.body)
  res.send(email)
}catch(error){
      console.error(error._message);
      res.send(error._message)
}
})

module.exports = router;
