var express = require('express');
var router = express.Router();

/* GET Angular post listing. */
router.get('/', function(req, res, next) {
  res.render('angular1');
});

module.exports = router;