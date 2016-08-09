var express = require('express');
var router = express.Router();

/**
  * @description
  * First route will handle the static html file delievery.
  * Second route will handle the API calls.
*/
router.get('/',function(req,res) {
  res.json({message : "Hello World"});
});

router.use('/user',require('./user'));

module.exports = router;
