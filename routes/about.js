var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about/index', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('about/contact', { title: 'Contact' });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('about/privacy-policy', { title: 'Privacy Policy' });
});

router.get('/terms-of-service', function(req, res, next) {
  res.render('about/terms-of-service', { title: 'Terms of Service' });
});

router.get('/help', function(req, res, next) {
  res.render('about/help', { title: 'Help' });
});

module.exports = router;
