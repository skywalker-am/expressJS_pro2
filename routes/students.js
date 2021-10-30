var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const StudentModel = require('../models/student.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('students route work properly');
});

/* GET users listing. */
router.get('/add', function(req, res, next) {
  let newStudent = new StudentModel({
    studentId: 100,
    firstName: 'ABC',
    lastname: 'XYZ',
    age:33,
    dob:'1988-07-01',
    department: 'CSE'
  });

  newStudent.save(function(err, newStudent){
    if(err){
      res.send(err);
    }else{
      res.send({status: 200, message: "User Added Successfully", studentObj: newStudent});
    }
  });
  
});

module.exports = router;
