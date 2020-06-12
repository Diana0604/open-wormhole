var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fax Machine' });
});

router.get('/tbl', function(req, res, next){
  res.render('tbl', {title: 'TBL'});
});

module.exports = router;
