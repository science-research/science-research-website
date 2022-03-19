var express = require('express');
var router = express.Router();

/* GET ciation home page. */
router.get('/', function(req, res, next) {
  res.render('citation/index', { title: 'Citation' });
});

router.get('/formatter', function(req, res, next) {
	res.render('citation/formatter', { title: 'Citation Formatter' });
});

module.exports = router;
