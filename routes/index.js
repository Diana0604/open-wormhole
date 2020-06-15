var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fax Machine' });
});

router.get('/tbl', function(req, res, next){
  res.render('tbl', {title: 'TBL'});
});

router.get('/security', function(req, res, next) { 
  res.render('security', {title: 'Security'});
});

router.get('/connectivity', function(req, res, next){
  res.render('connectivity', {title: 'Connectivity'})
});

module.exports = router;
