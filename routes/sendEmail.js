var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    console.log("posting the posts");
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;