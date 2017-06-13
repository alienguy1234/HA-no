var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
title: 'Profile'
name: 'Gadiel'
age: 15,
position: 'Student'
hobbies: ['living', 'gaming', 'drumming'],
}
  res.render('index', {'profile', context)
});

module.exports = router;
