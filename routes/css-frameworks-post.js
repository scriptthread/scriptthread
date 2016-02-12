var express = require('express');
var router = express.Router();

/* GET Angular post listing. */
router.get('/', function(req, res, next) {
  res.render('css-frameworks-post');
});

module.exports = router;