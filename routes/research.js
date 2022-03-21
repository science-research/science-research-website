var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('research/index', { title: 'Research' });
});

router.get('/papers', function(req, res, next) {
  res.render('research/papers', { title: 'Research Papers' });
});

router.get('/articles', function(req, res, next) {
  res.render('research/articles', { title: 'Research Articles' });
});

router.get('/studies', function(req, res, next) {
  res.render('research/studies', { title: 'Research Studies' });
});

router.get('/software', function(req, res, next) {
  res.render('research/software', { title: 'Research Software' });
});

module.exports = router;
