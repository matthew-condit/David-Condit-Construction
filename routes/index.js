var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  var error = req.query.error;
  console.log(error);
  res.render('index', {
    title: 'Home'
  });
});
/* GET trim page */
router.get('/trim', function (req, res, next) {
  res.render('trim', {
    title: 'Trim'
  })
});
/* GET plowing page */
router.get('/plowing', function (req, res, next) {
  res.render('plowing', {
    title: 'Snow Plowing'
  });
});
module.exports = router;