var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var error = req.query.error;
    console.log(error);
    res.render('index', { title: 'Condit Construction' });
});

module.exports = router;
