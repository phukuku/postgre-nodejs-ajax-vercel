var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sample_data', { title: 'Node JS PostgreSQL Ajax Application' });
});

module.exports = router;
