var express = require('express');
var router = express.Router();

router.all("/account",function(req,res) {
  res.json(req.decoded);
});

module.exports = router;
