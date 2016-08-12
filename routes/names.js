const express = require('express');
const router = express.Router();
const students = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Attendance', students: students });
});

router.post('/', function(req, res, next) {
const name = req.body.student;
    if (students[name]) {
        students[name] += 1;
    } else {
      students[name] = 1;


    }
  res.redirect('/names');
});

module.exports = router;
